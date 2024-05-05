import { createElement } from "./elements";
import imgUberEats from "./img/ubereats.png";
import imgDoorDash from "./img/doordash.jpeg";
import imgGrubhub from "./img/grubhub.png";
import imgBus from "./img/bus.jpg";

class FoodDeliveryService {
    constructor(name, logo, link) {
        this.name = name;
        this.logo = logo;
        this.link = link;
    }
}

function createFoodDeliveryServices() {

    const uberEats = new FoodDeliveryService(
        "Uber Eats", 
        imgUberEats, 
        "https://www.ubereats.com",
    );
    
    const doorDash = new FoodDeliveryService(
        "DoorDash", 
        imgDoorDash, 
        "https://www.doordash.com",
    );
    
    const grubhub = new FoodDeliveryService(
        "Grubhub", 
        imgGrubhub, 
        "https://www.grubhub.com",
    );

    return [
        uberEats,
        doorDash,
        grubhub
    ]
}

const foodDeliveryServices = createFoodDeliveryServices();
const orderImage = imgBus;

export default function renderOrderPage() {

    const orderContainer = createElement.div();
    orderContainer.classList.add("order-container");
    content.appendChild(orderContainer);

    const image = createElement.image(orderImage);
    image.classList.add("order-image");
    orderContainer.appendChild(image);

    const divInfo = createElement.div();
    orderContainer.appendChild(divInfo);

    const heading = createElement.h1("Order");
    divInfo.appendChild(heading);

    const caption = createElement.text("Order through one of our food-delivery service partners:")
    divInfo.appendChild(caption);

    const foodDeliveryContainer = createElement.div();
    foodDeliveryContainer.classList.add("food-delivery");
    divInfo.appendChild(foodDeliveryContainer);

    for (let i = 0; i < foodDeliveryServices.length; i++) {
        const foodDeliveryService = foodDeliveryServices[i];

        const logo = createElement.image(foodDeliveryService.logo);
        logo.classList.add("logo");
        foodDeliveryContainer.appendChild(logo);

        logo.addEventListener("click", function() {
            window.open(foodDeliveryService.link);
        })
    };
}