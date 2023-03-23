const textos = document.querySelectorAll('.campo-texto');

textos.forEach(elemento => {
    elemento.addEventListener('focus', esvaziarPlaceholder);
    elemento.addEventListener('blur', preencherPlaceholder);
});

function esvaziarPlaceholder () { this.placeholder = '' }

function preencherPlaceholder () { this.placeholder = `${this.name} aqui...` }
