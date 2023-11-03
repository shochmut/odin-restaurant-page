


function loadHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.textContent = "Big Daddy Sky's Sandwiches";

    header.appendChild(pageTitle);
    
    return header;
}


function renderWebsite() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader());
}