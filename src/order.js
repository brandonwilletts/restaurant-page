export default function renderOrderPage() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Order";
    content.appendChild(h1);
}