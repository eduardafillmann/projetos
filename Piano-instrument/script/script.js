const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('checkbox__keys');

const playNote = (nota) => {
    const audio = new Audio('../notes/1.waw');
    audio.play();      
}

const handleMouseDown = (key) => {
    playNote();
    if(key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

}

const handleMouseUp = (key) => {

    if(key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))

});

checkbox.addEventListener('change',({target}) => {
    alert(target.checked)
});