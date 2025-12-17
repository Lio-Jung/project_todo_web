function addTodo() {
    const target = document.querySelector('#todo'); 
    const newTodo = target.value.trim();  //newTodo's value can change but 'const' means rightside cannot change
    if (newTodo === 'write todo' || newTodo === '') {
    alert('please write your todo!');
    } else {
        const todoObj = { text: newTodo, completed: false };
        todoArray.push(todoObj);
        saveTodo();
        renderTodo(todoObj);   
        target.value = '';
    }
    target.focus();
}

function saveTodo() {
    localStorage.setItem(`user_${username}`,JSON.stringify(todoArray));
}


function renderTodo(todoObj) {
    const todoItem = document.createElement('div');
    //checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoObj.completed;
    checkbox.addEventListener('change', function () {
    todoObj.completed = this.checked;
    textNode.style.textDecoration = this.checked ? 'line-through' : 'none';
    saveTodo();
    });
    
    //text
    const textNode = document.createElement('span');
    textNode.textContent = " " + todoObj.text + ' ';
    textNode.style.textDecoration = checkbox.checked ? 'line-through' : 'none';

    //edit button
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'edit';
    editBtn.addEventListener('click', function(){
        editInline(textNode, todoObj);
        
    })

    //delete button  
    /*understanding: 이해를 해보면
    renderTodo(){}의 {}안에 체크박스,텍스트,삭제버튼이 묶음으로 있다.
    ()안에 들어오는 파라메터로는 todoObj, 즉 객체이다.
    그 객체는 name과 completed(default false)를 가지고 있다. name은 사용자가 id="todo"에 입력한 것을 받는다.
    그리고 renderTodo()로 생성된 것 체크박스,텍스트,삭제버튼은 한 묶음이다. 그래서 삭제버튼에서 container.removeChild(todoItem);를 했을 때, 3개가 다 사라진다.*/
    const deleteBtn = document.createElement('input');
    deleteBtn.style.margin = '5px';
    deleteBtn.type = 'button';
    deleteBtn.value = 'delete';
    deleteBtn.addEventListener('click', function () {
        container.removeChild(todoItem);
        todoArray = todoArray.filter(item => item !== todoObj); //understanding: Array를 이것의 todoObj를 빼고 업데이트
        saveTodo();
    });               

    //packaging
    todoItem.appendChild(checkbox);
    todoItem.appendChild(textNode);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    container.appendChild(todoItem);
}

function eraseAll() {
    if(confirm('delete all?')){
        container.innerHTML = "";
        todoArray = [];
        saveTodo();
        document.getElementById("todo").focus();
    }
}

function editInline(textNode, todoObj) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = todoObj.text;

    let isSaved = false;

    input.addEventListener('blur', () => {
        if (isSaved) return;
        input.parentNode.replaceChild(textNode, input);
    });
    input.addEventListener('keydown', e => {
        switch(e.key) {
            case "Enter":
                e.preventDefault();
                save();
                break;
            case 'Escape':
                e.preventDefault();
                input.blur();
                break;
        }
    });
    const save = () => {
        if (!input.parentNode) return; // DOM 제거됐을 때 안전장치
        isSaved = true;
        todoObj.text = input.value;
        textNode.textContent = ' ' + todoObj.text + " ";
        input.parentNode.replaceChild(textNode, input);
        saveTodo();
    };

    textNode.parentNode.replaceChild(input, textNode);
    input.focus();
    input.select();
}