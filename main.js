const html =  document.querySelector('html');
const focoBT = document.querySelector('.app__card-button--foco');
const curtoBT =  document.querySelector('.app__card-button--curto');
const  longoBT = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image  ');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput =  document.querySelector('#alternar-musica');

const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

let ContagemTemporizador = 5;
const botaoPlay = document.querySelector('#start-pause');
const intervaloID = null;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

//adicionar evento click  ->  (arrow function para atribuir um elemento na tag(HTML))
focoBT.addEventListener('click', () => {
    alteraContexto('foco')
    focoBT.classList.add('active')
})

curtoBT.addEventListener('click', () => {
    alteraContexto('descanso-curto')
    curtoBT.classList.add('active')
})

longoBT.addEventListener('click', () => {
    alteraContexto('descanso-longo')
    longoBT.classList.add('active')
})

function alteraContexto(contexto) {

    //remover dinamicamente os botao de ativo quando passar por cada um. 
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })


    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML  = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça  uma pausa curta.</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar á superfise<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }
}

function ContagemRegressiva() {
    if (ContagemRegressiva = 0) {
        alert('Contagem finalizada !')
        zerar()
    }
    iniciarOuPausar()
    ContagemTemporizador -= 1;
}

botaoPlay.addEventListener('click', ContagemRegressiva())

function iniciarOuPausar() {
    if (intervaloID) {
        zerar()
        return
    }
    intervaloID = setInterval(ContagemRegressiva(), 1000)
}

function zerar() {
    clearInterval(intervaloID);
    intervaloID = null
}

//colocar sons para pausar iniciar e parar.
