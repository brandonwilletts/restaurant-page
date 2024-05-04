import { createElement } from "./elements";

export default function renderOrderPage() {

    const orderContainer = createElement.div();
    orderContainer.classList.add("order-container");
    content.appendChild(orderContainer);

    const test = createElement.h1("Order");
    orderContainer.appendChild(test);
    
}