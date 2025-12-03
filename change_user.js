let openUser = false;
let popup = null; 
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
addUserBox.style.display = "relative";
addUserBox.style.width = "300px";
addUserBox.style.height = "150px";
addUserBox.style.transform = "translate(0%, -50%)";
addUserBox.style.background = "white";
addUserBox.style.borderRadius = "12px";
addUserBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
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



let okok = document.childElementCount('imput');
addUserOk.style.position = "absolute";
okok.type = 'button';
okok.value = 'ddd';
okok.style.width = "100px";
okok.style.height = "35px";

let addUserOk = document.createElement('button');
addUserOk.style.position = "absolute";
addUserOk.value = 'confirm';
addUserOk.style.transform = "translate(40%, 250%)";
addUserOk.style.width = "100px";
addUserOk.style.height = "35px";
let addUserX = document.createElement('div');
addUserX.style.position = "absolute";
addUserX.type = 'button';
addUserX.value = 'cancel';
addUserOk.style.transform = "translate(80%, 250%)";
addUserX.style.width = "10px";
addUserX.style.height = "35px";
addUserX.addEventListener('click', function() {
    closeAddUser();
})

function changeUser() {
    openUser = !openUser;
     if (openUser) {
        popup = document.createElement('div');
        popup.style.position = "fixed";
        popup.style.top = "45%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.width = "300px";
        popup.style.height = "400px";
        popup.style.background = "white";
        popup.style.borderRadius = "12px";
        popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        popup.style.padding = "20px";

        popup.appendChild(userclose);
        popup.appendChild(newUser);
        document.body.appendChild(popup);       
    } else {
        if (popup) {
            document.body.removeChild(popup);
            popup = null;
        }
    }
}

//TODO : realize this fnc
function addUser() {
    popup.appendChild(addUserBox);
    addUserBox.appendChild(addUserName0);
    addUserBox.appendChild(addUserName);
    addUserBox.appendChild(addUserOk);
    addUserBox.appendChild(addUserX);
    addUserBox.appendChild(okok);
    document.getElementById("addUserName").focus();
}

function closeAddUser() {
    popup.removeChild(addUserBox);
    alert(309);
}