const contactContent = {
    image: "../img/hero.jpeg",
    address: {
        street: "774 Summit Street",
        city: "Santa Clara, CA",
        zip: "95051"
    },
    phone: "408-555-1234",
    email: "nattiespatties@email.com",
    hours: {
        Monday: "10:00 AM - 8:00 PM",
        Tuesday: "10:00 AM - 8:00 PM",
        Wednesday: "10:00 AM - 8:00 PM",
        Thursday: "10:00 AM - 8:00 PM",
        Friday: "10:00 AM - 8:00 PM",
        Saturday: "10:00 AM - 8:00 PM",
        Sunday: "10:00 AM - 8:00 PM"
    }
}

export default function renderContactPage() {

    function createContactContainerElement() {
        const contactContainerElement = document.createElement("div");
        contactContainerElement.classList.add("contact-container");
        return contactContainerElement
    }

    function createContactImageElement(image) {
        const contactImageElement = document.createElement("div");
        contactImageElement.classList.add("contact-image");
        contactImageElement.style.cssText = `background-image: url(${image});`;
        return contactImageElement
    }

    function createContactDivElement() {
        const contactDivElement = document.createElement("div");
        return contactDivElement
    }

    function createContactHeadingElement(text) {
        const headingElement = document.createElement("h1");
        headingElement.textContent = `${text}`;
        return headingElement
    }

    function createContactSubheadingElement(text) {
        const subheadingElement = document.createElement("h2");
        subheadingElement.textContent = `${text}`;
        return subheadingElement
    }

    function createContactTextElement(text) {
        const textElement = document.createElement("p");
        textElement.textContent = `${text}`;
        return textElement
    }

    const content = document.querySelector("#content");

    const contactContainer = createContactContainerElement();
    content.appendChild(contactContainer);

    const image = createContactImageElement(contactContent.image);
    contactContainer.appendChild(image);

    const divInfo = createContactDivElement();
    contactContainer.appendChild(divInfo);

    const heading = createContactHeadingElement("Nattie's Patties");
    divInfo.appendChild(heading);

    const divAddressSection = createContactDivElement();
    divInfo.appendChild(divAddressSection);

        const subheadingAddress = createContactSubheadingElement("Address");
        divAddressSection.appendChild(subheadingAddress);

        const divAddress = createContactDivElement();
        divAddressSection.appendChild(divAddress);

        for (let item in contactContent.address) {
            const text = createContactTextElement(contactContent.address[item]);
            divAddress.appendChild(text);
        };

    const divContactSection = createContactDivElement();
    divInfo.appendChild(divContactSection);

        const subheadingContact = createContactSubheadingElement("Contact");
        divContactSection.appendChild(subheadingContact);

        const divContact = createContactDivElement();
        divContactSection.appendChild(divContact);

        const phone = createContactTextElement(contactContent.phone);
        divContact.appendChild(phone);

        const email = createContactTextElement(contactContent.email);
        divContact.appendChild(email);

    const divHoursSection = createContactDivElement();
    divInfo.appendChild(divHoursSection);
    
        const subheadingHours = createContactSubheadingElement("Hours");
        divHoursSection.appendChild(subheadingHours);

        const divHours = createContactDivElement();
        divHours.classList.add("contact-hours");
        divHoursSection.appendChild(divHours);

        for (let item in contactContent.hours) {
            const day = createContactTextElement(`${item}: `);
            divHours.appendChild(day);            
            
            const hours = createContactTextElement(contactContent.hours[item]);
            divHours.appendChild(hours);
        };
}