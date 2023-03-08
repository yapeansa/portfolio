const textos = document.querySelectorAll('.campo-texto');

textos.forEach((elemento) => {
    elemento.addEventListener('focus', function () {
        this.placeholder = '';
    });
    elemento.addEventListener('blur', function () {
        let holder;
        if (this.id === 'nome') {
            holder = 'seu nome';
        }
        else if (this.id === 'email') {
            holder = 'seu e-mail';
        }
        else {
            holder = 'sua mensagem';
        }
        this.placeholder = `Digite ${holder} aqui...`;
    });
});
