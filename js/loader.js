const loader = document.querySelector('#loader');
const main = document.querySelector('#conteudo__principal');

window.addEventListener('load', () => {
    setTimeout(desapareceLoader, 3000);
});

const desapareceLoader = () => {
    loader.style.display = 'none';
    document.body.classList.add('imagem-de-fundo');
    main.style.display = 'block';
}
