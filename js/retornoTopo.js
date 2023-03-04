const botao = document.getElementById('to-top');
const altura = screen.availHeight;

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > altura) {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(aparecer, 300);
    } else {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(efeito, 300);
    }
});

const aparecer = () => botao.style.display = 'block';

const removeClasse = () => botao.classList.remove('fade-out');

const desaparecer = () => botao.style.display = 'none';

const efeito = () => {
    botao.classList.add('fade-out');
    setTimeout(removeClasse, 300);
    setTimeout(desaparecer, 300);
}
