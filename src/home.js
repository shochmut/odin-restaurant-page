
function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = "The world's best sandwiches since 1997"

    const logo = document.createElement('img');
    logo.classList.add('home-logo');
    logo.src = '../dist/images/d605_n20a_210920.jpg';

    home.appendChild(homeTitle);
    home.appendChild(logo);
    return home
}

export default loadHome;