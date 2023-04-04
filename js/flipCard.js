const front = document.querySelectorAll('.to_back');
const back = document.querySelectorAll('.to_front');

front.forEach(botao => botao.addEventListener('click', mostrarVerso));

back.forEach(botao => botao.addEventListener('click', mostrarFrente));

function mostrarVerso () { this.parentElement.parentElement.classList.add('spin__card') }

function mostrarFrente () { this.parentElement.parentElement.classList.remove('spin__card') }
