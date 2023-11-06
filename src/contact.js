
function initContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact', 'page');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = "Get in Touch With Us For Business Inquiries!";

    contact.appendChild(contactTitle)
    
    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(initContact());
}

export default loadContact;