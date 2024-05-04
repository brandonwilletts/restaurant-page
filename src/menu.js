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
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
        5
    );
    
    const spicyPatty = new MenuItem(
        "Spicy Patty",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
        5
    );

    const vegetablePatty = new MenuItem(
        "Vegetable Patty",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
        5
    );
    
    const jerkChickenPatty = new MenuItem(
        "Jerk Chicken Patty",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
        7
    );
    
    const shrimpPatty = new MenuItem(
        "Shrimp Patty",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
        7
    );
    
    const oxtailPatty = new MenuItem(
        "Oxtail Patty",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
        "https://assets.bonappetit.com/photos/5e13adf8e7b92300089ad153/1:1/w_2560%2Cc_limit/0120-Beef-Patties-Cookbook-Club-1.jpg",
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

    for (let i = 0; i < menuItems.length; i++){
        const menuItem = menuItems[i];
        
        const itemContainer = createElement.div();
        itemContainer.classList.add("menu-item");
        menuContainer.appendChild(itemContainer);

        const image = createElement.image(menuItem.image);
        image.classList.add("menu-image");
        itemContainer.appendChild(image);

        const name = createElement.h3(menuItem.name);
        itemContainer.appendChild(name);

        const description = createElement.text(menuItem.description);
        itemContainer.appendChild(description);

        const price = createElement.text(menuItem.price);
        price.classList.add("menu-price");
        itemContainer.appendChild(price);
    };
}