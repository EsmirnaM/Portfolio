// --- Início: Menu Hamburguer ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// --- Fim: Menu Hamburguer ---

// --- Início: Animação de Scroll e Ativação de Links da Navbar ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    });

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// --- Fim: Animação de Scroll e Ativação de Links da Navbar ---

// --- Início: Animação de Barras de Progresso (Habilidades) ---
function animateBars() {
    const bars = {
        'barra_html': 90, 
        'barra_css': 85,  
        'barra_js': 75,   
        'barra_react': 70, 
        'barra_node': 60, 
        'barra_python': 65 
    };

    for (const barClass in bars) {
        const elements = document.querySelectorAll(`.${barClass}`);
        elements.forEach(element => {
            const percentage = bars[barClass];
            const beforeElement = element.querySelector('::before'); 
           
        });
    }
}


const habilidadesSection = document.getElementById('habilidades'); 

const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5 
};

const habilidadesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar as barras
            const bars = {
                'barra_html': 90, 
                'barra_css': 85,  
                'barra_js': 75,   
                'barra_react': 70, 
                'barra_node': 60, 
                'barra_python': 65 
            };

            for (const barClass in bars) {
                const elements = document.querySelectorAll(`.${barClass}`);
                elements.forEach(element => {
                    const percentage = bars[barClass];
                
                    element.style.setProperty('--fill-width', `${percentage}%`);
                    element.classList.add('animate-fill'); 
                });
            }
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

if (habilidadesSection) {
    habilidadesObserver.observe(habilidadesSection);
}


// --- Início: Inicialização do Swiper (Estudos) ---
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true, // Adiciona um cursor de "mão" ao arrastar

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    // Função para aplicar os estilos de transformação e filtro
    // Isso garante que os estilos são aplicados dinamicamente
    // quando o Swiper inicializa e quando os slides mudam.
    on: {
        init: function () {
            this.slides.forEach((slide) => {
                const card = slide.querySelector('.card_estudo');
                if (card) {
                    if (slide.classList.contains('swiper-slide-active')) {
                        card.style.transform = 'scale(1.1)';
                        card.style.filter = 'blur(0px)';
                    } else {
                        card.style.transform = 'scale(0.95)';
                        card.style.filter = 'blur(4px)';
                    }
                }
            });
        },
        slideChangeTransitionEnd: function () {
            this.slides.forEach((slide) => {
                const card = slide.querySelector('.card_estudo');
                if (card) {
                    if (slide.classList.contains('swiper-slide-active')) {
                        card.style.transform = 'scale(1.1)';
                        card.style.filter = 'blur(0px)';
                    } else {
                        card.style.transform = 'scale(0.95)';
                        card.style.filter = 'blur(4px)';
                    }
                }
            });
        },
        resize: function() {
            // Garante que os estilos se ajustam ao redimensionar a tela
            this.slides.forEach((slide) => {
                const card = slide.querySelector('.card_estudo');
                if (card) {
                    if (slide.classList.contains('swiper-slide-active')) {
                        card.style.transform = 'scale(1.1)';
                        card.style.filter = 'blur(0px)';
                    } else {
                        card.style.transform = 'scale(0.95)';
                        card.style.filter = 'blur(4px)';
                    }
                }
            });
        }
    }
});
// --- Fim: Inicialização do Swiper (Estudos) ---