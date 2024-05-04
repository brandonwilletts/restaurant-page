export default function renderContactPage() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact";
    content.appendChild(h1);
}