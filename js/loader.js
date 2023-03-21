// Criando o container loader

const loaderContainer = document.createElement('div');
loaderContainer.id = 'loader';
const divisao = document.createElement('div');
divisao.classList.add('animation__loader');
loaderContainer.append(divisao);

// Inserindo loader container no body

document.body.prepend(loaderContainer);

// Selecionando o loader pelo id e fazendo o conteúdo principal aparecer

const loader = document.querySelector('#loader');
const main = document.querySelector('#conteudo__principal');

window.addEventListener('load', () => setTimeout(desaparecerLoader, 3000));

function desaparecerLoader () {
    loader.style.display = 'none';
    main.style.display = 'block';
}
