let popups = document.getElementsByClassName('popups');

function dayNightHandler(self){
    var target = document.querySelector('body');

    if (self.value === 'Dark mode') {
    target.style.backgroundColor = 'rgba(37, 37, 39, 1)';
    target.style.color = 'white';
//    document.getElementsByClassName('popups')[0].style.backgroundColor = 'blue';
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.backgroundColor = 'rgba(37, 37, 39, 1)';
        popups[i].style.color = 'white';
        popups[i].style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.3)";
    }
    self.value = 'Light mode';
    } else {    
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.backgroundColor = 'white';
        popups[i].style.color = 'black';
        popups[i].style.boxShadow = "0 4px 10px rgba(6, 51, 198, 0.3)";
    }
    self.value = 'Dark mode';
    }
}