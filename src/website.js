import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'


function loadHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.textContent = "Big Daddy Sky's Sandwiches";

    const navbar = loadNavbar();

    header.appendChild(pageTitle);
    header.appendChild(navbar);
    
    return header;
}

function loadNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button', 'nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener("click", (e) => {
        (e.target.classList.contains('active')) ? null : (setActive(homeButton));
        loadHome();
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button', 'nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener("click", (e) => {
        (e.target.classList.contains('active')) ? null : (setActive(menuButton));
        loadMenu();
    })


    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button', 'nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener("click", (e) => {
        (e.target.classList.contains('active')) ? null : (setActive(contactButton));
        loadContact();
    })

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function setActive(navButton) {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('page');

    for (let i=0; i<navButtons.length; i++) {
        if (navButtons[i] == navButton) {
            navButton.classList.add('active');
        }
        else {
            navButtons[i].classList.remove('active');
        }
    }
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main')
    main.setAttribute('id', 'main');
    return main;
}





function renderWebsite() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader());
    content.appendChild(createMain());

    loadHome();
}

export default renderWebsite;