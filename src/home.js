import { createElement } from "./elements";
import imgHero from "./img/hero.jpeg";

const homeContent = {
    image: imgHero,
    headline: "World-famous Jamaican patties",
    caption: "Choose from six mouth-watering flavors!"
};

export default function renderHomePage() {

    const homeContainer = createElement.div();
    homeContainer.classList.add("home-container");
    content.appendChild(homeContainer);

    const image = createElement.image(homeContent.image);
    image.classList.add("home-image");
    homeContainer.appendChild(image);

    const div = createElement.div();
    homeContainer.appendChild(div);

    const headline = createElement.h1(homeContent.headline);
    div.appendChild(headline);

    const caption = createElement.text(homeContent.caption);
    caption.classList.add("home-caption");
    div.appendChild(caption);

    const orderButton = createElement.button("Order");
    orderButton.classList.add("btn-order");
    div.appendChild(orderButton);
}