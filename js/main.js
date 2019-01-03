//select DOM items
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

// set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

//this handles the DOM manipulaton

function toogleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItem.forEach(item => item.classList.add('.show'));

        //reset state of menu
        showMenu = true;
    }else{
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuBranding.classList.remove("show");
        menuNav.classList.remove("show");
        navItem.forEach(item => item.classList.remove(".show"));

        //reset state of menu
        showMenu = false; 
    }
}