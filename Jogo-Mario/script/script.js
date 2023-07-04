const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
    cron = setInterval(() => { timer(); }, 10);
  }

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {



    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop); //30:00 VIDEO
        clearInterval(cron);

    }

}, 10);

document.addEventListener('keydown', jump); 

function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }