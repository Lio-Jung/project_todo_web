let y = {};
//let lang = "ko";

async function changeLang() {
  try {
    const x = await fetch(`./i18n/ko.json`);
    y = await x.json();
    console.log(y);
    document.getElementById('dark_mode').value = y.dark_mode;
    document.getElementById('dark_mode').addEventListener('click', () => {
      isDark = !isDark;
      if(!isDark) {
        document.getElementById('dark_mode').value = y.dark_mode;
      } else {
        document.getElementById('dark_mode').value = y.light_mode;
      }
    });
    document.getElementById("change_user").value = y.change_user;
    document.getElementById('user').textContent = y.user;
    const todo = document.getElementById("todo");
    todo.placeholder = y.write_todo;
    document.getElementById('addbutton').addEventListener('click', () => {
      if (todo.value.trim() === 'write todo' || todo.value.trim() === '') {
        alert(y.empty_todo);
      };
    });
    document.getElementById('addbutton').value = y.enter;
    document.getElementById('clear_todos').value = y.clear_todos;
    
    
  } catch (error) {
    console.log(`Languages was not readable. ${error}`);
  }
}
  //TODO : 가능한건 여기서 번역하고, alert같은건 그 자리에서 하게끔 하자. 이거 질문도 하자.

var e = {
    "ask_clear": "할 일을 전부 삭제하시겠습니까?",
    "edit": "편집",
    "delete": "삭제",

    "create_user": "사용자 생성",
    "user_name": "사용자 이름",
    "confirm": "확인",
    "cancle": "취소",
    "same_name": "이미 같은 이름의 사용자가 있습니다!",
    "warn_other_user": "현재 사용자는 삭제될 수 없습니다.",
    "ask_x_user": "경고! 당신의 할 일들도 삭제됩니다.",
    "new_name": "새로운 이름",
    "edit_same_name": "이미 같은 이름의 사용자가 있습니다. 다른 이름을 적어주세요"
}