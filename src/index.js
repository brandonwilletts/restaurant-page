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
    
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", function() {
        clearContent();
        renderHomePage();
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

    const orderButton = document.querySelector(".btn-order");
    orderButton.addEventListener("click", function() {
        clearContent();
        renderOrderPage();
    });
}

renderHomePage();
pageNav();