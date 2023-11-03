function loadNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button', 'nav-button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button', 'nav-button');
    menuButton.textContent = 'Menu';


    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button', 'nav-button');
    contactButton.textContent = 'Contact';


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

export default loadNavbar;