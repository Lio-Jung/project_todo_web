function dayNightHandler(self){
    var target = document.querySelector('body');

    if (self.value === 'Dark mode') {
    target.style.backgroundColor = 'rgb(30,30,30)';
    target.style.color = 'white';
    self.value = 'Light mode';
    } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'Dark mode';
    }
}