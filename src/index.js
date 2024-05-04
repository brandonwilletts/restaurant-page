import "./style.css";
import renderMenuPage from "./menu";
import renderHomePage from "./home";
import renderContactPage from "./contact";
import renderOrderPage from "./order";

function pageNav() {
    const content = document.querySelector("#content");

    function clearContent() {
        content.textContent = "";
    }

    function addEventListenerToOrderButtons() {
        const orderButtons = document.querySelectorAll(".btn-order");
        for (let i = 0; i < orderButtons.length; i++) {
            const orderButton = orderButtons[i];
            orderButton.addEventListener("click", function() {
                clearContent();
                renderOrderPage();
            });
        }
    }
    
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", function() {
        clearContent();
        renderHomePage();
        addEventListenerToOrderButtons();
    });

    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", function() {
        clearContent();
        renderMenuPage();
    });

    const contactButton = document.querySelector("#contact");
    contactButton.addEventListener("click", function() {
        clearContent();
        renderContactPage();
    });

    addEventListenerToOrderButtons();
}

renderHomePage();
pageNav();