import Logo from './logo.jpg';


function initHome() {
    const home = document.createElement('div');
    home.classList.add('home', 'page');

    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = "The world's best sandwiches since 1997"

    const logo = new Image();
    logo.classList.add('home-logo');
    logo.src = Logo;

    const logoAnchor = document.createElement('a');
    logoAnchor.href = "https://www.freepik.com/free-vector/sandwich-with-cheese-vegetable-cartoon-style_24467628.htm#query=sandwich%20logo&position=0&from_view=keyword&track=ais"
    logoAnchor.appendChild(logo);


    home.appendChild(homeTitle);
    home.appendChild(logoAnchor);

    return home
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(initHome());
}

export default loadHome;