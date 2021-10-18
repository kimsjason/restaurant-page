import Spark from './images/spark.jpg';

const menu = () => {
    const content = document.querySelector('#content');
    function addItems(menuCategory, menuItems, categoryName) {
        const header = document.createElement('div');
        header.classList.add('menu-category-header');
        header.innerHTML = categoryName;
        menuCategory.appendChild(header);
        for (const item in menuItems) {
            const menuItem = document.createElement('li');
            menuItem.classList.add('menu-item');
            const itemName = document.createElement('p');
            const itemPrice = document.createElement('p');

            itemName.innerHTML = item;
            itemPrice.innerHTML = menuItems[item];
            
            menuItem.appendChild(itemName);
            menuItem.appendChild(itemPrice);
            menuCategory.appendChild(menuItem);
        }
    }


    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = 'SPARK MENU';

    // starters
    const starters = document.createElement('ul');
    starters.classList.add('menu-category');
    const starterItems = {
        'sicilian arancini': '15,000 won',
        'bruschetta w/ tomatoes, burrata, & anchovies': '14,000 won',
        'signature octopus in garlic oil': '23,000 won',
        'grilled wild oyster mushrooms & wagyu carpaccio': '22,000 won'
    };

    // sides
    const sides = document.createElement('ul');
    sides.classList.add('menu-category');
    const sideItems = {
        'vegetable plate': '14,000 won',
        'truffle fries': '13,000 won'
    };

    // pasta and risotto
    const pasta = document.createElement('ul');
    pasta.classList.add('menu-category');
    const pastaItems = {
        'oil spaghetti w/ fresh seafood medley': '34,000 won',
        'paccheri pasta w/ truffle cream sauce': '33,000 won',
        'spaghetti w/ bolognese sauce': '32,000 won',
        'soft steamed abalone risotto': '34,000 won'
    };

    // mains
    const mains = document.createElement('ul');
    mains.classList.add('menu-category');
    const mainItems = {
        'grilled iberico pork belly': '34,000 won',
        'charcoal grilled beef rib steak': '39,000 won'
    };

    // desserts
    const desserts = document.createElement('ul');
    desserts.classList.add('menu-category');
    const dessertItems = {
        'panettone w/ vanilla ice cream': '15,000 won',
        'affogato': '7,000 won'
    };

    addItems(starters, starterItems, 'starters');
    addItems(sides, sideItems, 'sides');
    addItems(pasta, pastaItems, 'pasta & risotto');
    addItems(mains, mainItems, 'mains');
    addItems(desserts, dessertItems, 'desserts');

    // menu
    const spark = document.createElement('img');
    spark.classList.add('spark');
    spark.src = Spark;

    menu.appendChild(spark.cloneNode(true))
    menu.appendChild(starters);
    menu.appendChild(spark.cloneNode(true))
    menu.appendChild(sides);
    menu.appendChild(spark.cloneNode(true))
    menu.appendChild(pasta);
    menu.appendChild(spark.cloneNode(true))
    menu.appendChild(mains);
    menu.appendChild(spark.cloneNode(true))
    menu.appendChild(desserts);
    menu.appendChild(spark.cloneNode(true))

    content.appendChild(menu);
}

export { menu };