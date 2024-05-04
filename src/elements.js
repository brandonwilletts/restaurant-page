export const createElement = (function() {
    
    function div() {
        const divElement = document.createElement("div");
        return divElement
    };

    function image(image) {
        const imageElement = document.createElement("div");
        imageElement.style.cssText = `background-image: url(${image});`;
        return imageElement
    };

    function h1(text) {
        const h1Element = document.createElement("h1");
        h1Element.textContent = `${text}`;
        return h1Element
    };

    function h2(text) {
        const h2Element = document.createElement("h2");
        h2Element.textContent = `${text}`;
        return h2Element
    };

    function h3(text) {
        const h3Element = document.createElement("h3");
        h3Element.textContent = `${text}`;
        return h3Element
    };


    function text(text) {
        const textElement = document.createElement("p");
        textElement.textContent = `${text}`;
        return textElement
    };

    function button(text) {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = `${text}`;
        return buttonElement
    };

    const content = document.querySelector("#content");

    return {
        content,
        div,
        image,
        h1,
        h2,
        h3,
        text,
        button
    };
})();