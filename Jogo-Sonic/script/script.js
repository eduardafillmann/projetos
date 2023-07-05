const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "/Jogo-Sonic/imagens/Sonic-Jump.gif";

    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "/Jogo-Sonic/imagens/Sonic.gif";
    }, 900);
};

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
        eggman.style.animation = 'none'
        eggman.style.left = `${eggmanPosition}px`;

        sonic.style.animation = "none";
        sonic.src = "/Jogo-Sonic/imagens/Sonic-Loss.gif";
        sonic.style.width = "240px";


        fundo.src = "/Jogo-Sonic/imagens/GameoverSMB-1.png"
    }

}, 10)

document.addEventListener("keydown", jump);


//https://www.youtube.com/watch?v=nEcUo9iHdrU&ab_channel=Prod%C3%ADgioDev
 