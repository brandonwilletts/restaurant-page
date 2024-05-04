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
    
    function createMenuContainerElement() {
        const menuContainerElement = document.createElement("div");
        menuContainerElement.classList.add("menu-container");
        return menuContainerElement
    }
    
    function createMenuHeadingElement() {
        const headingElement = document.createElement("h2");
        headingElement.textContent = "Menu";
        return headingElement;
    }

    function createMenuItemContainerElement() {
        const itemContainerElement = document.createElement("div");
        itemContainerElement.classList.add("menu-item");
        return itemContainerElement
    }

    function createMenuItemImageElement(image) {
        const imageElement = document.createElement("div");
        imageElement.classList.add("menu-image");
        imageElement.style.cssText = `background-image: url(${image});`;
        return imageElement
    }

    function createMenuItemNameElement(name) {
        const nameElement = document.createElement("h3");
        nameElement.textContent = `${name}`;
        return nameElement
    }

    function createMenuItemDescriptionElement(description) {
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = `${description}`;
        return descriptionElement
    }

    function createMenuItemPriceElement(price) {
        const priceElement = document.createElement("p");
        priceElement.classList.add("menu-price");
        priceElement.textContent = `$${price}`;
        return priceElement
    }

    const content = document.querySelector("#content");

    const menuContainer = createMenuContainerElement();
    content.appendChild(menuContainer);

    const heading = createMenuHeadingElement();
    menuContainer.appendChild(heading);

    for (let i = 0; i < menuItems.length; i++){
        const menuItem = menuItems[i];
        
        const itemContainer = createMenuItemContainerElement();
        menuContainer.appendChild(itemContainer);

        const image = createMenuItemImageElement(menuItem.image);
        itemContainer.appendChild(image);

        const name = createMenuItemNameElement(menuItem.name);
        itemContainer.appendChild(name);

        const description = createMenuItemDescriptionElement(menuItem.description);
        itemContainer.appendChild(description);

        const price = createMenuItemPriceElement(menuItem.price);
        itemContainer.appendChild(price);
    };
}