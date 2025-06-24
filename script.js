// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Função para o efeito de digitação no título ---
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = ''; // Limpa o conteúdo original
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i); // Adiciona cada letra com um pequeno atraso
        });
    }

    const titulo = document.querySelector('.meunome');
    if (titulo) { // Garante que o elemento existe antes de chamar a função
        ativaLetra(titulo);
    }

    // --- Lógica para o Menu Hambúrguer Responsivo ---
    const menuIcon = document.querySelector('#menu-icon'); // Assumindo que o ID do ícone é 'menu-icon'
    const navbar = document.querySelector('.navbar'); // Assumindo que a classe da navbar é 'navbar'

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
            // Opcional: Adicionar/remover classe para animar o ícone (Ex: para mudar de hambúrguer para 'X')
            // Se você estiver usando Boxicons ou Font Awesome, pode ter uma classe para o 'X'
            // Exemplo para Boxicons:
            if (menuIcon.classList.contains('bx-menu')) { // Se o ícone atual é o de menu
                menuIcon.classList.remove('bx-menu');
                menuIcon.classList.add('bx-x'); // Mudar para o ícone 'X'
            } else {
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu'); // Voltar para o ícone de menu
            }
        });

        // Opcional: Fechar o menu quando um link é clicado (útil para navegação em single-page)
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active'); // Esconde a navbar
                // Garante que o ícone volte ao normal
                if (menuIcon.classList.contains('bx-x')) {
                    menuIcon.classList.remove('bx-x');
                    menuIcon.classList.add('bx-menu');
                }
            });
        });
    } else {
        console.warn("Elemento #menu-icon ou .navbar não encontrado. O menu hambúrguer pode não funcionar.");
    }

    // --- Função para validar o formato do e-mail ---
    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    // --- Função para manipular o envio do formulário ---
    function handleSubmit(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nomeInput = document.querySelector('#nome');
        const sobrenomeInput = document.querySelector('#sobrenome');
        const emailInput = document.querySelector('#email');
        const telefoneInput = document.querySelector('#telefone');
        const mensagemTextarea = document.querySelector('#mensagem'); // ID correto 'mensagem'

        // Validações
        if (nomeInput && nomeInput.value.trim() === "") {
            alert("O campo Nome é obrigatório.");
            return;
        }

        if (sobrenomeInput && sobrenomeInput.value.trim() === "") {
            alert("O campo Sobrenome é obrigatório.");
            return;
        }

        if (emailInput && emailInput.value.trim() === "") {
            alert("O campo E-mail é obrigatório.");
            return;
        }

        if (telefoneInput && telefoneInput.value.trim() === "") {
            alert("O campo Telefone é obrigatório.");
            return;
        }

        if (mensagemTextarea && mensagemTextarea.value.trim() === "") {
            alert("O campo Mensagem é obrigatório.");
            return;
        }

        if (emailInput && !isValidEmail(emailInput.value.trim())) {
            alert("O campo E-mail não é válido.");
            return;
        }

        // Se todas as validações passarem
        alert("Formulário enviado com sucesso (apenas demonstração)! Para um envio real, implemente uma API ou serviço de backend.");
        // Remova a linha abaixo se você estiver usando um serviço de backend (ex: Formspree, Netlify Forms)
        // ou se for fazer um AJAX request. Se for um HTML form simples, mantenha.
        // event.target.submit(); 
    }

    // Vincular o evento de submit do formulário
    // CORREÇÃO: Usando um ID para o formulário no HTML é a melhor prática, ex: <form id="contact-form">
    const form = document.querySelector('#contact-form'); // Assumindo que você dará o ID "contact-form" ao seu formulário

    if (form) {
        form.addEventListener("submit", handleSubmit);
    } else {
        console.warn("Formulário com ID 'contact-form' não encontrado. Verifique o seletor no script.js e o ID no seu HTML.");
    }


    // --- Inicialização do Swiper ---
    // CORREÇÃO AQUI: O Swiper deve ser inicializado no container principal do slider.
    // No seu HTML, o container pode ser algo como <div class="swiper mySwiper">
    // Vou usar '.swiper' como o seletor padrão. Certifique-se de que seu HTML tem essa classe.
    const swiperContainer = document.querySelector('.swiper');

    if (swiperContainer) {
        const swiper = new Swiper(swiperContainer, {
            loop: true,
            grabCursor: true,
            spaceBetween: 30, // Exemplo: 30px de espaço entre os slides. Ajuste conforme necessário.

            // Paginação
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },

            // Botões de navegação
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Breakpoints para responsividade
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                620: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
            }
        });
    } else {
        console.warn("Container do Swiper (.swiper) não encontrado. O carrossel pode não funcionar.");
    }

}); // Fim do DOMContentLoaded