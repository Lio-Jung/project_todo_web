function manageTodo() {
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

    
    /* 
    edit button -> div to text + 'confirm' btn 'cancel' btn (child 'cancel' + xchild 'delete')
    -> 'text' value changable 
    -> 1,2,3,4 at  the same time
    1. enter in text -> confirm change          (event fnc -> click 'confirm' btn)
    2. click 'confirm' btn -> confirm change        -> 'new text' value to 'div' value
    3. ESC -> reject change
    4. blur -> reject change            -> no 'text' value changed
    5. 'cancel' btn - > reject change
    -> replchild 'confirm' btn + xchild 'cancel' + child 'delete'
    */
    //edit button
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.className = 'btn';
    editBtn.value = 'edit';
    editBtn.addEventListener('click', function(){
        editBtn.parentNode.replaceChild(confirmBtn, this);
        textNode.parentNode.replaceChild(editText, textNode);
        deleteBtn.parentNode.replaceChild(editCancelbtn, deleteBtn);
        editText.focus();
        editText.select();
    });
    //confirm button
    const confirmBtn = document.createElement('input');
    confirmBtn.type = 'button';
    confirmBtn.className = 'btn';
    confirmBtn.value = 'confirm';
    confirmBtn.id = 'confirmBtn';
    confirmBtn.addEventListener('mousedown', () => {
        ignoreBlur = true;
        document.getElementById('confirmBtn').click();
    });
    confirmBtn.addEventListener('click', () =>{
        todoObj.text = editText.value;
        textNode.textContent = ' ' + todoObj.text + " ";
        editText.parentNode.replaceChild(textNode, editText);
        confirmBtn.parentNode.replaceChild(editBtn, confirmBtn);
        editCancelbtn.parentNode.replaceChild(deleteBtn, editCancelbtn);
        saveTodo();
    })
    //edit text
    const editText = document.createElement('input');
    editText.type = 'text';
    editText.value = todoObj.text;
    let ignoreBlur = false;
    editText.addEventListener('blur', e =>{
        if (ignoreBlur) {
            ignoreBlur = false;
            return;                                                           
        } else {
        document.getElementById('editCancelbtn').click();
        }   
    })
    editText.addEventListener('keydown', e => {
        switch(e.key) {
            case "Enter":
                ignoreBlur = true;
                e.preventDefault();
                document.getElementById("confirmBtn").click();
                break;
            case 'Escape':
                e.preventDefault();
                editText.blur();
                break;
        }
    });
    //edit cancel btn
    const editCancelbtn = document.createElement('input');
    editCancelbtn.type = 'button';
    editCancelbtn.className = 'btn';
    editCancelbtn.value = 'cancel';
    editCancelbtn.id = 'editCancelbtn';
    editCancelbtn.addEventListener('click', () => {
        editText.value = todoObj.text;
        editText.parentNode.replaceChild(textNode, editText);
        confirmBtn.parentNode.replaceChild(editBtn, confirmBtn);
        editCancelbtn.parentNode.replaceChild(deleteBtn, editCancelbtn);
    })


    //delete button  
    /*understanding: 이해를 해보면
    renderTodo(){}의 {}안에 체크박스,텍스트,삭제버튼이 묶음으로 있다.
    ()안에 들어오는 파라메터로는 todoObj, 즉 객체이다.
    그 객체는 name과 completed(default false)를 가지고 있다. name은 사용자가 id="todo"에 입력한 것을 받는다.
    그리고 renderTodo()로 생성된 것 체크박스,텍스트,삭제버튼은 한 묶음이다. 그래서 삭제버튼에서 container.removeChild(todoItem);를 했을 때, 3개가 다 사라진다.*/
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn';
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