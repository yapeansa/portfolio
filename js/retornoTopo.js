const botao = document.getElementById('to-top');
const altura = screen.availHeight;

document.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > altura) {
        clearInterval(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(aparecer, 300);
    } else {
        botao.classList.add('fade-out');
        setTimeout(removeClasse, 300);
        setTimeout(desaparecer, 300);
    }
});

function aparecer() { botao.style.display = 'block'; }

function removeClasse() { botao.classList.remove('fade-out'); }

function desaparecer() { botao.style.display = 'none'; }
