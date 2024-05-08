//Seu JavaScript de validação aqui
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Validação do campo Nome
        const nome = document.getElementById('nome').value.trim();
        if (nome === '') {
            alert('Por favor, insira seu nome.');
            return;
        }

        // Validação do campo Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Validação do campo Assunto
        const assunto = document.getElementById('assunto').value.trim();
        if (assunto === '') {
            alert('Por favor, insira o assunto.');
            return;
        }

        // Validação do campo Mensagem
        const mensagem = document.getElementById('mensagem').value.trim();
        if (mensagem === '') {
            alert('Por favor, insira sua mensagem.');
            return;
        }

        alert('Formulário enviado com sucesso!');
       
    });
});