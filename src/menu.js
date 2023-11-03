
const menuRef = []; //initialize our menu items array

class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

menuRef.push(new Item('Grilled Cheese', 'hot sandwich made with buttered and toasted bread and filled with American cheese'));
menuRef.push(new Item('Reuben', 'grilled sandwich composed of corned beef, Swiss cheese, sauerkraut, and Thousand Island dressing'));
menuRef.push(new Item('Cuban', 'made with ham, (mojo) roasted pork, Swiss cheese, pickles, and mustard'));
menuRef.push(new Item('BLT', 'bacon, lettuce, tomato, and mayo'));
menuRef.push(new Item('Monte Cristo', 'ham, turkey, and Swiss cheese'));
menuRef.push(new Item('Egg Salad', 'in house prepped egg salad served on your choice of bread'));


const generateMenuItem = (name, description) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add(`menu-item`)

    const itemLabel = document.createElement('h2');
    itemLabel.classList.add(`menu-label`)
    itemLabel.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add(`menu-description`);
    itemDescription.textContent = description;

    menuItem.appendChild(itemLabel);
    menuItem.appendChild(itemDescription);

    return menuItem
}


function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(menuRef.map((item) => {
        generateMenuItem(item.name, item.description)
    }))



    return menu
}



export default loadMenu

