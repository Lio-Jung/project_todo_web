function addTodo() {
    const target = document.querySelector('#todo'); 
    const newTodo = target.value.trim();  //newTodo's value can change but 'const' means rightside cannot change
    if (newTodo === 'write todo' || newTodo === '') {
    alert('please write your todo!');
    document.getElementById("todo").focus();
    } else {
        const todoObj = { text: newTodo, completed: false };
        todoArray.push(todoObj);
        saveTodo();
        renderTodo(todoObj);   
        target.value = '';
        document.getElementById("todo").focus();
    }
}

function saveTodo() {
    localStorage.setItem(`user_${username}`,JSON.stringify(todoArray));
}


function renderTodo(todoObj) {
    const toDiv = document.createElement('div');
    //checkbox
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.checked = todoObj.completed;
    newCheckbox.addEventListener('change', function () {
    todoObj.completed = this.checked;
    textNode.style.textDecoration = this.checked ? 'line-through' : 'none';
    saveTodo();
    });
    
    //text
    //let textNode = document.createElement('span');
    const textNode = document.createElement('span');
    //textNode.contentEditable = false;
    textNode.textContent = " " + todoObj.text + ' ';
    textNode.style.textDecoration = newCheckbox.checked ? 'line-through' : 'none';

    //edit button
    const newedit = document.createElement('input');
    newedit.type = 'button';
    newedit.value = 'edit';
    newedit.addEventListener('click', function(){
        openedit(textNode);
    })


    //delete button  
    /*understanding: 이해를 해보면
    renderTodo(){}의 {}안에 체크박스,텍스트,삭제버튼이 묶음으로 있다.
    ()안에 들어오는 파라메터로는 todoObj, 즉 객체이다.
    그 객체는 name과 completed(default false)를 가지고 있다. name은 사용자가 id="todo"에 입력한 것을 받는다.
    그리고 renderTodo()로 생성된 것 체크박스,텍스트,삭제버튼은 한 묶음이다. 그래서 삭제버튼에서 container.removeChild(toDiv);를 했을 때, 3개가 다 사라진다.*/
    const newdelete = document.createElement('input');
    newdelete.style.margin = '5px';
    newdelete.type = 'button';
    newdelete.value = 'delete';
    newdelete.addEventListener('click', function () {
        container.removeChild(toDiv);
        todoArray = todoArray.filter(item => item !== todoObj); //understanding: Array를 이것의 todoObj를 빼고 업데이트
        saveTodo();
    });               

    //packaging
    toDiv.appendChild(newCheckbox);
    toDiv.appendChild(textNode);
    toDiv.appendChild(newedit);
    toDiv.appendChild(newdelete);
    container.appendChild(toDiv);
}

function eraseAll() {
    if(confirm('delete all?')){
        container.innerHTML = "";
        todoArray = [];
        saveTodo();
        document.getElementById("todo").focus();
    }
}

function openedit(textNode, todoObj) {
    const openeditPopup = document.createElement('div');
    openeditPopup.className = "popups";
    openeditPopup.style.position = "fixed";
    openeditPopup.style.display = 'block';
    openeditPopup.style.paddingLeft = '40';
    openeditPopup.style.top = "50%";
    openeditPopup.style.left = "50%";
    openeditPopup.style.width = "270px";
    openeditPopup.style.marginLeft = "-12%";
    openeditPopup.style.height = "60px";
    openeditPopup.style.marginTop = "-260px";
    document.body.appendChild(openeditPopup);
    const editt = document.createElement('input');
    editt.type = 'text';
    editt.style.position = 'relative';
    editt.style.marginLeft= '20px ';
    editt.style.width = "230px";
    editt.value = textNode.textContent;
    editt.addEventListener('keydown', function(event) {
        if(event.key === "Enter") {

            edito.click();
        }
    })
    const edito = document.createElement('input');
    edito.type = 'button';
    edito.style.position = 'absolute';
    edito.value = 'confirm';
    edito.style.width = "60px";
    edito.style.top = "60%";
    edito.style.left = "25%";
    /*
    editt.addEventListener('change', function() {
        alert(20);
        todoObj.text = this.value;
        alert(todoObj.text );
        saveTodo()
    })
    */
    edito.addEventListener('click', function() {
        
        textNode.textContent = " " + editt.value + ' ';

        document.body.removeChild(openeditPopup);
        saveTodo();
    })
    const editx = document.createElement('input');
    editx.type = 'button';
    editx.style.position = 'absolute';
    editx.value = 'cancel';
    editx.style.width = "60px";
    editx.style.top = "60%";
    editx.style.right = "25%";
    editx.addEventListener('click', function(){
        document.body.removeChild(openeditPopup);
    })
    openeditPopup.appendChild(editt);
    openeditPopup.appendChild(edito);
    openeditPopup.appendChild(editx);
    editt.focus();
    editt.select();
}