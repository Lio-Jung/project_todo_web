/*
TODO : if darkmode -> edit or x uesr -> reloaded with class popups userblock(must be, popups userblock dark_mode)
TODO : language ko-en-ko    
*/

let openUser = false; 
let isBtnBlock = true;
//const changeUserPopup = null; 
const changeUserPopupAbove = document.createElement('div');
changeUserPopupAbove.id = 'changeUserPopupAbove';
changeUserPopupAbove.style.margin = 0;
changeUserPopupAbove.style.padding = 0;
changeUserPopupAbove.style.height = "70px";
changeUserPopupAbove.style.width = "300px";

const changeUserPopupBelow = document.createElement('div');
changeUserPopupBelow.id = 'changeUserPopupBelow';
/*
changeUserPopupBelow.style.margin = 0;
changeUserPopupBelow.style.padding = 0;
changeUserPopupBelow.style.height = "330px";
changeUserPopupBelow.style.width = "300px";
*/

renderUser();

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
//newUser.value = window.i18n.create_user; //?
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
addUserName.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("addUserOk").click();
        }
    });
//shadow. limit input-length with px
const aUNShadow = document.createElement('span'); 
aUNShadow.style.visibility = 'hidden';
aUNShadow.style.whiteSpace = 'pre';
let aUNlastValue = '';
addUserName.addEventListener('input', () => {
    aUNShadow.textContent = addUserName.value;
    if (aUNShadow.offsetWidth > 100) {
        addUserName.value = aUNlastValue;
    } else {
        aUNlastValue = addUserName.value;
    }
});

const addUserOk = document.createElement('input');
addUserOk.id = "addUserOk";
addUserOk.type = "button";
addUserOk.style.position = "absolute";
addUserOk.value = 'confirm';
addUserOk.style.width = "100px";
addUserOk.style.height = "35px";
addUserOk.style.transform = "translate(40%, 250%)";
addUserOk.addEventListener('click', function() {
    if (addUserName.value.trim()) {
        if (userMeta.users.includes(addUserName.value.trim())) {
            addUserName.value = '';
            alert(lang("same_name"));
        } else {
            confirmUser();
        }
    } else {
        addUserName.value = '';
        alert("please write something");
    }
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
    addUserName.value = '';
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
    document.body.appendChild(aUNShadow);
    document.getElementById("addUserName").focus();
    addUserBoxPopup.appendChild(addUserOk);
    addUserBoxPopup.appendChild(addUserX);    
}

function closeAddUser() {
    addUserBoxPopup.style.display = 'none';
}

function confirmUser() {
    addUserBoxPopup.style.display = 'none';
    userMeta.users.push(addUserName.value);
    saveUser();
    renderUser();
    localStorage.setItem(`todo_${addUserName.value}`,JSON.stringify([]));
    addUserName.value = '';
}

function saveUser() {
    localStorage.setItem('userMeta', JSON.stringify(userMeta));
}

function renderUser() {
    changeUserPopupBelow.innerHTML = "";
    userMeta.users.forEach(item => {
        const userBlock = document.createElement('div');
        userBlock.className = 'popups userBlock';
        userBlock.addEventListener("mouseenter", () => {
            userBlock.classList.toggle("mouseon_user");
        });
        userBlock.addEventListener("mouseleave", () => {
            userBlock.classList.remove("mouseon_user");
        });
        userBlock.addEventListener("click", () => {
            if(isBtnBlock) {
                userMeta.currentUser = item;
                saveUser();
                document.getElementById('username').textContent = `${userMeta.currentUser}`;
                loadTodo();
                rerender();
            }
            isBtnBlock = true;
            
        });
        const userBlockLeft = document.createElement('div');
        const userBlockRight = document.createElement('div');
        const userBlockName = document.createElement('span');
        userBlockName.textContent = item;
        userBlockName.position = 'absolute';
        userBlockName.style.margin = '5%';        
        /*
        const userBlockText = document.createElement('input');
        userBlockText.type = 'text';
        userBlockText.value = item;
        */

        const userBlcokEdit = document.createElement('input');
        userBlcokEdit.type = 'button';
        userBlcokEdit.value = '✎';
        userBlcokEdit.style.paddingLeft = '3.8px';
        userBlcokEdit.style.paddingRight = '3.8px';
        userBlcokEdit.style.margin = '2px';
        userBlcokEdit.addEventListener('click', () => {
            isBtnBlock = false;
            let newName = prompt("new Name", `${item}`).trim();
            if (userMeta.users.includes(newName)) {
                alert('there is already a user with same name. write other name');
            } else {
                //change user & CUser
                let index = userMeta.users.indexOf(item);
                if (userMeta.currentUser === userMeta.users[index]) {
                    userMeta.currentUser = newName;
                }
                userMeta.users[index] = newName;
                //save user, copy todo, x old todo, rerender
                saveUser();
                localStorage.setItem(`todo_${newName}`, localStorage.getItem(`todo_${item}`));
                localStorage.removeItem(`todo_${item}`);
                renderUser();
                rerender();
                document.getElementById('user').textContent = `User : ${userMeta.currentUser}`;
            }
        });

        const userBlcokDelete = document.createElement('input'); 
        userBlcokDelete.type = 'button';
        userBlcokDelete.value = '✖';
        userBlcokDelete.style.paddingLeft = '5px';
        userBlcokDelete.style.paddingRight = '5px';
        userBlcokDelete.style.margin = '2px';
        userBlcokDelete.addEventListener('click', () => {
            isBtnBlock = false;
            if (item === userMeta.currentUser) {
                alert(lang("warn_other_user"));
            } else {
                if(confirm() == true) {

                changeUserPopupBelow.removeChild(userBlock);
                userMeta.users = userMeta.users.filter(e => e !== item);
                saveUser();
                renderUser();
                localStorage.removeItem(`todo_${item}`);            
                }
            }
        });

        changeUserPopupBelow.appendChild(userBlock);
        userBlock.appendChild(userBlockLeft);
        userBlock.appendChild(userBlockRight);
        userBlockLeft.appendChild(userBlockName);
        userBlockRight.appendChild(userBlcokEdit);
        userBlockRight.appendChild(userBlcokDelete);
    });
}

function valuesCUjs() {
    newUser.value = lang("create_user");
    addUserName0.innerHTML = lang("user_name");
}