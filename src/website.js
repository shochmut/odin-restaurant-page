import loadNavbar from './navbar.js'
import loadHome from './home.js'
import loadMenu from './menu.js'


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




function renderWebsite() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader());
    content.appendChild(loadMenu());
    //content.appendChild(loadHome());
}

export default renderWebsite;