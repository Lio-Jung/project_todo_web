function dayNightHandler(self){
    var target = document.querySelector('body');

    if (self.value === 'Dark mode') {
    target.style.backgroundColor = 'rgba(37, 37, 39, 1)';
    target.style.color = 'white';
    self.value = 'Light mode';
    } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'Dark mode';
    }
}