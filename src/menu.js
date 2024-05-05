import { createElement } from "./elements";

class MenuItem {
    constructor(name, description, image, priceInDollars) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = priceInDollars;
    }
}

function createMenuItems() {

    const originalPatty = new MenuItem(
        "Original Patty",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "../src/img/patty.jpg",
        5
    );
    
    const spicyPatty = new MenuItem(
        "Spicy Patty",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "../src/img/patty.jpg",
        5
    );

    const vegetablePatty = new MenuItem(
        "Vegetable Patty",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "../src/img/patty.jpg",
        5
    );
    
    const jerkChickenPatty = new MenuItem(
        "Jerk Chicken Patty",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "../src/img/patty.jpg",
        7
    );
    
    const shrimpPatty = new MenuItem(
        "Shrimp Patty",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "../src/img/patty.jpg",
        7
    );
    
    const oxtailPatty = new MenuItem(
        "Oxtail Patty",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
        "../src/img/patty.jpg",
        10
    );

    return [
        originalPatty,
        spicyPatty,
        vegetablePatty,
        jerkChickenPatty,
        shrimpPatty,
        oxtailPatty
    ]
}

const menuItems = createMenuItems();

export default function renderMenuPage() {

    const menuContainer = createElement.div();
    menuContainer.classList.add("menu-container");
    content.appendChild(menuContainer);

    const heading = createElement.h1("Menu");
    menuContainer.appendChild(heading);

    const menuGrid = createElement.div();
    menuGrid.classList.add("menu-grid");
    menuContainer.appendChild(menuGrid);

    for (let i = 0; i < menuItems.length; i++){
        const menuItem = menuItems[i];
        
        const itemContainer = createElement.div();
        itemContainer.classList.add("menu-item");
        menuGrid.appendChild(itemContainer);

        const image = createElement.image(menuItem.image);
        image.classList.add("menu-image");
        itemContainer.appendChild(image);

        const itemDescriptionContainer = createElement.div();
        itemDescriptionContainer.classList.add("menu-item-description-container");
        itemContainer.appendChild(itemDescriptionContainer);

        const nameAndPriceContainer = createElement.div();
        nameAndPriceContainer.classList.add("menu-item-title")
        itemDescriptionContainer.appendChild(nameAndPriceContainer);

            const name = createElement.h3(menuItem.name);
            nameAndPriceContainer.appendChild(name);

            const price = createElement.h3(`$${menuItem.price}`);
            price.classList.add("menu-price");
            nameAndPriceContainer.appendChild(price);

        const description = createElement.text(menuItem.description);
        itemDescriptionContainer.appendChild(description);
    };
}