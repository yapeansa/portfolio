const textos = document.querySelectorAll('.campo-texto');

textos.forEach(elemento => {
    elemento.addEventListener('focus', esvaziarPlaceholder);
    elemento.addEventListener('blur', preencherPlaceholder);
});

function esvaziarPlaceholder() { this.placeholder = ''; }

function preencherPlaceholder() {
    let holder;

    if (this.id === 'nome')
        holder = 'seu nome';
    else if (this.id === 'email')
        holder = 'seu e-mail';
    else
        holder = 'sua mensagem';

    this.placeholder = `Digite ${holder} aqui...`;
}
