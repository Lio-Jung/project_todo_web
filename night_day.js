function dayNightHandler(self){
    var target = document.querySelector('body');

    if (self.value === 'night') {
    target.style.backgroundColor = 'rgb(30,30,30)';
    target.style.color = 'white';
    self.value = ' day ';
    } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    }
}