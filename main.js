const html =  document.querySelector('html');
const focoBT = document.querySelector('.app__card-button--foco');
const curtoBT =  document.querySelector('.app__card-button--curto');
const  longoBT = document.querySelector('.app__card-button--longo');

//adicionar evento click  ->  (arrow function para atribuir um elemento na tag(HTML))
focoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})