let openUser = false;
let changeUserPopup = null; 
let changeUserGrid = document.createElement('div');
changeUserGrid.id = "changeUserGrid";
let changeUserPopupUp = document.createElement('div');
changeUserPopupUp.style.margin = 0;
changeUserPopupUp.style.padding = 0;
changeUserPopupUp.style.height = "100px";
changeUserPopupUp.style.width = "300px";

let changeUserPopupDown = document.createElement('div');
changeUserPopupDown.style.margin = 0;
changeUserPopupDown.style.padding = 0;
changeUserPopupDown.style.height = "300px";
changeUserPopupDown.style.width = "300px";
changeUserPopupDown.style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)"; //TODO : erase it later

let userclose = document.createElement('input');
userclose.type = 'button';
userclose.value = 'x';   
userclose.style.transform = "translate(1280%, -80%)";
userclose.addEventListener('click', function(){
    changeUser();
})

let newUser = document.createElement('input');
newUser.type = 'button';
newUser.value = 'Create User';
newUser.style.transform = "translate(0%, -20%)";
newUser.style.width = "290px";
newUser.style.height = "40px";
newUser.addEventListener('click', function() {
    addUser();
})

let addUserBox = document.createElement('div'); 
addUserBox.id = "addUserBox";
addUserBox.style.display = "relative";
addUserBox.style.width = "300px";
addUserBox.style.height = "150px";
addUserBox.style.transform = "translate(0%, -270%)";
addUserBox.style.background = "white";
addUserBox.style.borderRadius = "12px";
addUserBox.style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)";

let addUserName0 = document.createElement('SPAN');
addUserName0.innerHTML = 'User Name: ';
addUserName0.style.position = "absolute";
addUserName0.style.fontSize = "15px";
addUserName0.style.transform ="translate(10%, 200%)";

let addUserName = document.createElement('input');
addUserName.style.position = "absolute";
addUserName.id = "addUserName";
addUserName.type = 'text';
addUserName.style.width = "150px";
addUserName.style.height = "15px";
addUserName.style.transform = "translate(60%, 210%)";

let addUserOk = document.createElement('input');
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

let addUserX = document.createElement('input');
addUserX.type = 'button';
addUserX.style.position = "absolute";
addUserX.value = 'cancel';
addUserX.style.width = "100px";
addUserX.style.height = "35px";
addUserX.style.transform = "translate(160%, 250%)";
addUserX.addEventListener('click', function() {
    closeAddUser();
})




function changeUser() {
    openUser = !openUser;
     if (openUser) {
        changeUserPopup = document.createElement('div');
        changeUserPopup.id = "changeUserGrid";
        changeUserPopup.style.position = "fixed";
        changeUserPopup.style.top = "45%";
        changeUserPopup.style.left = "50%";
        changeUserPopup.style.transform = "translate(-50%, -50%)";
        changeUserPopup.style.width = "300px";
        changeUserPopup.style.height = "400px";
        changeUserPopup.style.background = "white";
        changeUserPopup.style.borderRadius = "12px";
        changeUserPopup.style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)";
        changeUserPopup.style.padding = "20px";

        document.body.appendChild(changeUserPopup);   
        changeUserPopup.appendChild(changeUserPopupUp);
        changeUserPopupUp.appendChild(userclose);
        changeUserPopupUp.appendChild(newUser);
        changeUserPopup.appendChild(changeUserPopupDown);
    } else {
        if (changeUserPopup) {
            document.body.removeChild(changeUserPopup);
            changeUserPopup = null;
        }
    }
}

function addUser() {
    changeUserPopup.appendChild(addUserBox);
    addUserBox.appendChild(addUserName0);
    addUserBox.appendChild(addUserName);
    document.getElementById("addUserName").focus();
    addUserBox.appendChild(addUserOk);
    addUserBox.appendChild(addUserX);    
    addUserName.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("addUserOk").click();
        }
    });
}

function closeAddUser() {
    changeUserPopup.removeChild(addUserBox);
}

function confirmUser() {
    changeUserPopup.removeChild(addUserBox);
    alert("sent User Name ");
    
}
