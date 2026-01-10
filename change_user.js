const openUser = false; 
//const changeUserPopup = null; 
const changeUserPopupAbove = document.createElement('div');
changeUserPopupAbove.id = 'changeUserPopupAbove';
changeUserPopupAbove.style.margin = 0;
changeUserPopupAbove.style.padding = 0;
changeUserPopupAbove.style.height = "100px";
changeUserPopupAbove.style.width = "300px";

const changeUserPopupBelow = document.createElement('div');
changeUserPopupBelow.id = 'changeUserPopupBelow';
changeUserPopupBelow.style.margin = 0;
changeUserPopupBelow.style.padding = 0;
changeUserPopupBelow.style.height = "300px";
changeUserPopupBelow.style.width = "300px";
changeUserPopupBelow.style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)"; //TODO : erase it later

// loading users & current user is ganz oben //TODO : 이거 하자
console.log( userMeta.users);
/*
userMeta.users.foreach(item => {
    const userBlock = document.createElement('div');
    userBlock.className = 'userBlock';
    userBlock.textContent = item;
    changeUserPopupBelow.appendChild(userBlock);
});
*/

const userclose = document.createElement('input');
userclose.id = 'userclose';
userclose.type = 'button';
userclose.value = 'x';   
userclose.style.transform = "translate(1280%, -80%)";
userclose.addEventListener('click', function(){
    changeUser();
})

const newUser = document.createElement('input');
newUser.type = 'button';
newUser.value = 'Create User';
newUser.style.transform = "translate(0%, -20%)";
newUser.style.width = "290px";
newUser.style.height = "40px";
newUser.addEventListener('click', function() {
    addUser();
})

const addUserBoxPopup = document.createElement('div'); 
addUserBoxPopup.id = "addUserBoxPopupPopup";
addUserBoxPopup.className = "popups";
document.body.appendChild(addUserBoxPopup);
//changeUserPopup.appendChild(addUserBoxPopup);



const addUserName0 = document.createElement('SPAN');
addUserName0.innerHTML = 'User Name: ';
addUserName0.style.position = "absolute";
addUserName0.style.fontSize = "15px";
addUserName0.style.transform ="translate(10%, 200%)";

const addUserName = document.createElement('input');
addUserName.style.position = "absolute";
addUserName.id = "addUserName";
addUserName.type = 'text';
addUserName.style.width = "150px";
addUserName.style.height = "15px";
addUserName.style.transform = "translate(60%, 210%)";

const addUserOk = document.createElement('input');
addUserOk.id = "addUserOk";
addUserOk.type = "button";
addUserOk.style.position = "absolute";
addUserOk.value = 'confirm';
addUserOk.style.width = "100px";
addUserOk.style.height = "35px";
addUserOk.style.transform = "translate(40%, 250%)";
addUserOk.addEventListener('click', function() {
    confirmUser();
})

const addUserX = document.createElement('input');
addUserX.type = 'button';
addUserX.style.position = "absolute";
addUserX.value = 'cancel';
addUserX.style.width = "100px";
addUserX.style.height = "35px";
addUserX.style.transform = "translate(160%, 250%)";
addUserX.addEventListener('click', function() {
    closeAddUser();
})



const changeUserPopup = document.createElement('div');
changeUserPopup.id = "changeUserGrid";
changeUserPopup.className = "popups";
changeUserPopup.style.position = "fixed";
changeUserPopup.style.display = 'none';
changeUserPopup.style.top = "45%";
changeUserPopup.style.left = "50%";
changeUserPopup.style.transform = "translate(-50%, -50%)";
changeUserPopup.style.width = "300px";
changeUserPopup.style.height = "400px";
//changeUserPopup.style.background = "white";
//changeUserPopup.style.borderRadius = "12px";
//changeUserPopup.style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)";
//changeUserPopup.style.padding = "20px";
document.body.appendChild(changeUserPopup);






function changeUser() {
    openUser = !openUser;
     if (openUser) {
        changeUserPopup.style.display = "block";
        changeUserPopup.appendChild(changeUserPopupAbove);
        changeUserPopupAbove.appendChild(userclose);
        changeUserPopupAbove.appendChild(newUser);
        changeUserPopup.appendChild(changeUserPopupBelow);
    } else {
        if (changeUserPopup) {
            changeUserPopup.style.display = "none";
            addUserBoxPopup.style.display = "none";
        }
    }
}

function addUser() {
    addUserBoxPopup.style.display = 'block';
    addUserBoxPopup.appendChild(addUserName0);
    addUserBoxPopup.appendChild(addUserName);
    document.getElementById("addUserName").focus();
    addUserBoxPopup.appendChild(addUserOk);
    addUserBoxPopup.appendChild(addUserX);    
    addUserName.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("addUserOk").click();
        }
    });
}

function closeAddUser() {
    addUserBoxPopup.style.display = 'none';
}

function confirmUser() {
    addUserBoxPopup.style.display = 'none';
    alert("sent User Name ");
    
}
