let isSet = false;

//popup
const settingPopup = document.createElement('div');
settingPopup.id = "settingPopup";
settingPopup.className = "popups";
document.body.appendChild(settingPopup);

//grid of popup
const setdivtop = document.createElement('div');
const setdivmain = document.createElement('div');
const setdivbot = document.createElement('div');
setdivtop.style.textAlign = 'right';
setdivbot.style.textAlign = 'right';
settingPopup.appendChild(setdivtop);
settingPopup.appendChild(setdivmain);
settingPopup.appendChild(setdivbot);

//dark mode
const darkdiv = document.createElement('input');
darkdiv.type = "image";
darkdiv.src = "dark_mode.png";
darkdiv.id = "dark_mode";
darkdiv.className = "setdiv";
darkdiv.style.width = "20px";
darkdiv.style.height = "20px";
darkdiv.style.borderRadius = "50%";
darkdiv.addEventListener('click', () => {
    dayNightHandler(self);
    if (isDark) {
        darkdiv.src = "light_mode.png";
    } else {
        darkdiv.src = "dark_mode.png";
    }   
});
setdivtop.appendChild(darkdiv);

//change user
const cudiv = document.createElement('div');
cudiv.id = "change_user";
cudiv.className = "setdiv";
cudiv.addEventListener('click', () => {
    let target = changeUserPopup;
    closeAll_openOne(target);
    //worklog.appendChild(changeUserPopup);
    //changeUserPopup.classList.toggle('show_grid');
});
document.body.appendChild(changeUserPopup);
setdivmain.appendChild(cudiv);

//language
const langdiv = document.createElement('div');
langdiv.id = "language_change";
langdiv.className = "setdiv";
let isLang = true; //TODO : maybe delete it..?
langdiv.addEventListener('click', () => {    
    let target = langpopup;
    closeAll_openOne(target);
    langSel.focus();
});
document.body.appendChild(langpopup); //from language.js... cuz setting.js has <defer>
setdivmain.appendChild(langdiv);

/*
///////////////////////////////////////////////////////////////
//test div
const testdiv = document.createElement('div');
testdiv.id = 'testdiv';
testdiv.className = "setdiv";
testdiv.textContent = 'test';
setdivmain.appendChild(testdiv);
let istest = true;
testdiv.addEventListener('click', () => {
    let target = test2;
    closeAll_openOne(target);   
});
const test2 = document.createElement('div');
test2.className = 'div_popups'
test2.style.height = "200px";
test2.style.width = "200px";
test2.style.background = 'black';
document.body.appendChild(test2);
const btn1 = document.createElement('input');
btn1.type = 'button';
test2.appendChild(btn1);
///////////////////////////////////////////////////////////////
*/

//mouse enter/leave setting divs
let settar = document.querySelectorAll(".setdiv");
settar.forEach(item => {
    item.addEventListener('mouseenter', () =>{
        item.classList.toggle("mouseon_user");
    }); 
    item.addEventListener('mouseleave', () => {
        item.classList.toggle("mouseon_user");
    });
});

//work log
const worklog = document.createElement('div');
worklog.textContent = 'work log';
worklog.style.fontSize = '10px';
worklog.addEventListener('click', () =>{
    worklogdiv.style.display = 'grid';
    worklogContent.textContent = logtxt;
});
setdivbot.appendChild(worklog);
let logtxt = loadWorkLog();

const worklogdiv = document.createElement('div');
worklogdiv.id = "worklogdiv";
worklogdiv.style.padding = '10px';
document.body.appendChild(worklogdiv);
//grid 1,2
const workgrid1 = document.createElement('div');
workgrid1.style.width = '260px';
const workgrid2 = document.createElement('div');
workgrid1.style.textAlign = 'right';
worklogdiv.appendChild(workgrid1);
worklogdiv.appendChild(workgrid2);
const workX = document.createElement('input');
workX.type = 'button';
workX.style.position ='fixed';
workX.value = 'x';
workX.addEventListener('click', () => {
   worklogdiv.style.display = 'none';
});
workgrid1.appendChild(workX);

const worklogContent = document.createElement('div');
worklogContent.style.whiteSpace = 'pre';
worklogContent.style.fontSize = '10px';
workgrid2.appendChild(worklogContent);

function valuesSetjs() {
    return;
    //console.log(`valuesSetjs(); in setting.js is empty`);
}

function settingOpen() {
    isSet = !isSet;
    if (isSet) {
        settingPopup.style.display = 'grid';
    } else {
        settingPopup.style.display = 'none';
        //close whole setting too
        try {
            closeAll_openOne(); // = all close
        } catch {}
    }   
}

function closeAll_openOne(target) {
    let temp = document.querySelectorAll('.div_popups');
    temp.forEach(item => {
        if (item === target) {
        } else {
            try {
                item.classList.remove('show_grid');
            } catch {}
        }        
    });
    target.classList.toggle('show_grid'); 
}


async function loadWorkLog() {
  try {
    const x = await fetch(`./work_log.txt`);
    a = await x.text();
    console.log('log was read.');
    logtxt = a;
  } catch (error) {
    console.log(`log was not readable. ${error}`);
  }
}