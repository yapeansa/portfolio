const loader = document.querySelector('#loader');
const main = document.querySelector('#conteudo__principal');

window.addEventListener('load', () => {
    setTimeout(desapareceLoader, 3000);
});

const desapareceLoader = () => {
    loader.style.display = 'none';
    main.style.display = 'block';
}
