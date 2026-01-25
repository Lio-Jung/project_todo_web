let i18n = {};

async function loadLang(cLang) {
  try {
    const x = await fetch(`./i18n/${cLang}.json`);
    i18n = await x.json();
    console.log('Language was read.');
  } catch (error) {
    console.log(`Languages was not readable. ${error}`);
  }
}


function lang(key) {
  return i18n[key] || key;
}


function renderLang() {
  document.getElementById("dark_mode").textContent = lang("dark_mode");
  document.getElementById("change_user").textContent = lang("change_user");
  document.getElementById("language_change").textContent = lang("language_change");
  document.getElementById("user").textContent = lang("user");
  document.getElementById("todo").placeholder = lang("write_todo");
  document.getElementById("addbutton").value = lang("enter");
  document.getElementById("clear_todos").value = lang("clear_todos");
}
//TODO : 언어를 변경 할 때 마다 모든 body.child다 없애기

var e = {
    "ask_x_user": "경고! 당신의 할 일들도 삭제됩니다.",
    "new_name": "새로운 이름",
    "edit_same_name": "이미 같은 이름의 사용자가 있습니다. 다른 이름을 적어주세요"
}