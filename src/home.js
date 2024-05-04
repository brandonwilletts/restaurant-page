export default function renderHomePage() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Home";
    content.appendChild(h1);
}