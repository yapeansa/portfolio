const textos = document.querySelectorAll('[data-texto]');

textos.forEach(elemento => {
    elemento.addEventListener('focus', esvaziarPlaceholder);
    elemento.addEventListener('blur', preencherPlaceholder)
});

function esvaziarPlaceholder () { this.placeholder = '' }

function preencherPlaceholder () {
    if (this.name == 'nome' || this.name == 'e-mail') {
        this.placeholder = ` Digite seu ${this.name} aqui...`;
    }
    else {
        this.placeholder = `Digite sua ${this.name} aqui...`;
    }
}
