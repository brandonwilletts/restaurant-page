const homeContent = {
    image: "../img/hero.jpeg",
    headline: "Headline",
    caption: "This is the caption"
};

export default function renderHomePage() {

    function createHomeContainerElement() {
        const homeContainerElement = document.createElement("div");
        homeContainerElement.classList.add("home-container");
        return homeContainerElement
    }

    function createHomeImageElement(image) {
        const homeImageElement = document.createElement("div");
        homeImageElement.classList.add("home-image");
        homeImageElement.style.cssText = `background-image: url(${image});`;
        return homeImageElement
    }

    function createHomeDivElement() {
        const homeDivElement = document.createElement("div");
        return homeDivElement
    }

    function createHomeHeadlineElement(text) {
        const homeHeadlineElement = document.createElement("h1");
        homeHeadlineElement.textContent = `${text}`;
        return homeHeadlineElement
    }

    function createHomeCaptionElement(text) {
        const homeCaptionElement = document.createElement("p");
        homeCaptionElement.classList.add("home-caption");
        homeCaptionElement.textContent = `${text}`;
        return homeCaptionElement
    }

    function createHomeOrderButton() {
        const homeOrderButton = document.createElement("button");
        homeOrderButton.classList.add("btn-order");
        homeOrderButton.textContent = "Order";
        return homeOrderButton
    }

    const content = document.querySelector("#content");

    const homeContainer = createHomeContainerElement();
    content.appendChild(homeContainer);

    const image = createHomeImageElement(homeContent.image);
    homeContainer.appendChild(image);

    const div = createHomeDivElement();
    homeContainer.appendChild(div);

    const headline = createHomeHeadlineElement(homeContent.headline);
    div.appendChild(headline);

    const caption = createHomeCaptionElement(homeContent.caption);
    div.appendChild(caption);

    const orderButton = createHomeOrderButton();
    div.appendChild(orderButton);
}