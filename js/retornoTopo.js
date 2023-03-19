// Criando o botão de retornar ao topo

const retornarAoTopo = document.createElement('div');
retornarAoTopo.classList.add('botao__topo');
retornarAoTopo.id = 'to-top';
retornarAoTopo.innerHTML = '<a href="#">&uarr;</a>';

// Adicionando ao body o botão de retornar ao topo

document.body.appendChild(retornarAoTopo);

// Pegando o botão de retornar ao topo pelo id e aplicando os efeitos de scroll

const botao = document.querySelector('#to-top');
const altura = screen.availHeight - 80;

document.addEventListener('scroll', rolagem);

function rolagem () {
    if (document.documentElement.scrollTop > altura) {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(aparecerBotao, 300);
    } else {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(efeito, 300);
    }
}

function aparecerBotao () { botao.style.display = 'block' }

function removerClasse () { botao.classList.remove('fade-out') }

function desaparecerBotao () { botao.style.display = 'none' }

function efeito () {
    botao.classList.add('fade-out');
    setTimeout(removerClasse, 300);
    setTimeout(desaparecerBotao, 300);
}
