let i18n = {};

const langpopup = document.createElement('div');
langpopup.id = "langpopup";
langpopup.className = 'div_popups';
const langDivtop = document.createElement('div');
const langDivbot = document.createElement('div');
langDivtop.className = "divs";
langDivbot.className = "divs";

//dropdown, select
const langArr = [ {value: "en", text: "English"}, {value: "ko",text: "한국어"}];
const langSel = document.createElement('select');
langArr.forEach(e => {
  const langOp = document.createElement('option');
  langOp.value = e.value;
  langOp.text = e.text;
  langSel.appendChild(langOp);
});
let temLang = '';
langSel.addEventListener('change', () => {
  userMeta.currentLangauge = langSel.value;
  container.innerHTML = "";
  count_pri = 0;
  loadLang_renderTodo();
});

const langO = document.createElement('input');
const langX = document.createElement('input');
langO.type = 'button';
langX.type = 'button';
langO.className = "btn";
langX.className = "btn";
langO.addEventListener('click', () => {
  userMeta.currentLangauge = langSel.value;
  container.innerHTML = "";
  count_pri = 0;
  loadLang_renderTodo();
  temLang = userMeta.currentLangauge;
  langpopup.classList.remove('show_grid');
  localStorage.setItem('userMeta', JSON.stringify(userMeta));
});
langX.addEventListener('click', () => {
  userMeta.currentLangauge = temLang || 'en';
  container.innerHTML = "";
  count_pri = 0;
  loadLang_renderTodo();
  langpopup.classList.remove('show_grid');
  langSel.value = userMeta.currentLangauge;
});

langpopup.appendChild(langDivtop); 
langpopup.appendChild(langDivbot);
langDivtop.appendChild(langSel);
langDivbot.appendChild(langO);
langDivbot.appendChild(langX);


function valueLangjs() {
  langO.value = lang("confirm");
  langX.value = lang("cancel");
}

async function loadLang(cLang) {
  try {
    const x = await fetch(`./i18n/${cLang}.json`);
    i18n = await x.json();
    //console.log('Language was read.');
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