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
//                    const container = document.getElementById('todoCheckContainer');
                    const toDiv = document.createElement('div');

                    //checkbox
                    const newCheckbox = document.createElement('input');
                    newCheckbox.type = 'checkbox';
                    newCheckbox.checked = todoObj.completed;
                    newCheckbox.addEventListener('change', function () {
                    todoObj.completed = this.checked;
                    textNode.style.textDecoration = this.checked ? 'line-through' : 'none';
                    saveTodos();
                    });
                    
                    //text
                    const textNode = document.createElement('span');
                    textNode.textContent = " " + todoObj.text + ' ';
                    textNode.style.textDecoration = newCheckbox.checked ? 'line-through' : 'none';

                    //delete button  
                    /*understanding: 이해를 해보면
                    renderTodo(){}의 {}안에 체크박스,텍스트,삭제버튼이 묶음으로 있다.
                    ()안에 들어오는 파라메터로는 todoObj, 즉 객체이다.
                    그 객체는 name과 completed(default false)를 가지고 있다. name은 사용자가 id="todo"에 입력한 것을 받는다.
                    그리고 renderTodo()로 생성된 것 체크박스,텍스트,삭제버튼은 한 묶음이다. 그래서 삭제버튼에서 container.removeChild(toDiv);를 했을 때, 3개가 다 사라진다.*/
                    const newdelete = document.createElement('input');
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
                    toDiv.appendChild(newdelete);
                    container.appendChild(toDiv);
                }

function eraseAll() {
                if(confirm('delete all?')){
                    container.innerHTML = "";
                    todoArray = [];
                    document.getElementById("todo").focus();
                }
            }