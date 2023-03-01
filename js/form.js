const textos = document.querySelectorAll('.campo-texto');
textos.forEach( (elemento) => {
    elemento.addEventListener('focus', function () {
        this.placeholder = '';
    });
    elemento.addEventListener('blur', function () {
        if (this.id === 'nome') {
            this.placeholder = 'Digite seu nome aqui...';
        }
        else if(this.id === 'email') {
            this.placeholder = 'Digite seu e-mail aqui...';
        }
        else {
            this.placeholder = 'Digite sua mensagem aqui...';
        }
    });
});
