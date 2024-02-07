//Cambiar el tamaño del header a 450px cuando se haga click en .menu__trigger

let header = document.querySelector('.header');
let menuTrigger = document.querySelector('.menu__trigger');
let menu = document.querySelector('.menu');
let menuTriggerSpan = document.querySelector('.menu__trigger span');
let menuTriggerSpanBackground = document.querySelector('.menu__trigger span').style;
let windowWidth = window.innerWidth;

menuTrigger.addEventListener('click', function() {
    if (menuTrigger.classList.contains('closed')) {
        header.style.height = '450px';
        menuTriggerSpanBackground.background = '#FFED4A';
        menuTrigger.classList.remove('closed');
        menuTrigger.classList.add('open');
    } else {
        header.style.height = '150px';
        menuTriggerSpanBackground.background = '#ffffff';
        menuTrigger.classList.remove('open');
        menuTrigger.classList.add('closed');
    }
    }
);