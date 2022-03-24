// Scroll Reveal
let scrR = ScrollReveal({
    origin: "bottom",
    distance: "20px",
    duration: 2000,
    reset: true,
});

scrR.reveal(
    ` .top-body-grid, 
    .bot-body, .body2, .big-bloom, .third-body,
    .readers, .footer-nav, .foot, .end, 
    .home1, .many, .nature1, .material,
    .peterson, .img-gallery, .comment`,
    {
        interval: 100,
    }
);

    // Swipper JS
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                sliderShadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

// LOCAL JS
    
// Scroll Top
let toTop = document.querySelector('.scroll-top');
let nav = document.querySelector('.nav');

window.addEventListener('scroll', scrollTop);

function scrollTop() {
    if (scrollY > 100) {
        toTop.classList.add('scroll-active');
        nav.classList.add('nav-fixed');
    } else {
        toTop.classList.remove('scroll-active');
        nav.classList.remove('nav-fixed');


    }
}

// Toggle Btn 
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', clickToggle);

function clickToggle() {
    nav.classList.add('nav-act')
}

// Remove Toggle
let x = document.querySelector('.x');

x.addEventListener('click', removeToggle);

function removeToggle() {
    nav.classList.remove('nav-act')
}

// Dark and Light
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let body = document.querySelector('body');

sun.addEventListener('click', sunHide);
moon.addEventListener('click', moonHide);

function sunHide() {
    sun.classList.add('fa-sun-hide')
    moon.classList.add('fa-moon-show')
    body.classList.add('dark-side')
    
}

function moonHide() {
    sun.classList.remove('fa-sun-hide')
    moon.classList.remove('fa-moon-show')
    body.classList.remove('dark-side')
}


