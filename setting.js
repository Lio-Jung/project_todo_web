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
    changeUser();
});
setdivmain.appendChild(cudiv);

//language
const langdiv = document.createElement('div');
langdiv.id = "language_change";
langdiv.className = "setdiv";
setdivmain.appendChild(langdiv);

let settar = document.querySelectorAll(".setdiv");
settar.forEach(item => {
    item.addEventListener('mouseenter', () =>{
        item.classList.toggle("mouseon_user");
    }); 
    item.addEventListener('mouseleave', () => {
        item.classList.toggle("mouseon_user");
    });
});

//TODO : language div aktiv

//work log
const worklog = document.createElement('div');
worklog.textContent = 'work log';
worklog.style.fontSize = '10px';
worklog.addEventListener('click', () =>{
    console.log(2);
});
setdivbot.appendChild(worklog);

const worklogdiv = document.createElement('div');
worklogdiv.textContent = '';


function valuesSetjs() {

}

function settingOpen() {
    isSet = !isSet;
    if (isSet) {
        settingPopup.style.display = 'grid';
    } else {
        settingPopup.style.display = 'none';
    }
    
}

