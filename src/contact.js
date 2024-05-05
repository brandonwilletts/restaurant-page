import { createElement } from "./elements";

const contactContent = {
    image: "./img/restaurant.jpg",
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

    const contactContainer = createElement.div();
    contactContainer.classList.add("contact-container");
    content.appendChild(contactContainer);

    const image = createElement.image(contactContent.image);
    image.classList.add("contact-image");
    contactContainer.appendChild(image);

    const divInfo = createElement.div();
    contactContainer.appendChild(divInfo);

    const heading = createElement.h1("Nattie's Patties");
    divInfo.appendChild(heading);

    const divAddressSection = createElement.div();
    divInfo.appendChild(divAddressSection);

        const subheadingAddress = createElement.h2("Address");
        divAddressSection.appendChild(subheadingAddress);

        const divAddress = createElement.div();
        divAddressSection.appendChild(divAddress);

        for (let item in contactContent.address) {
            const text = createElement.text(contactContent.address[item]);
            divAddress.appendChild(text);
        };

    const divContactSection = createElement.div();
    divInfo.appendChild(divContactSection);

        const subheadingContact = createElement.h2("Contact");
        divContactSection.appendChild(subheadingContact);

        const divContact = createElement.div();
        divContactSection.appendChild(divContact);

        const phone = createElement.text(contactContent.phone);
        divContact.appendChild(phone);

        const email = createElement.text(contactContent.email);
        divContact.appendChild(email);

    const divHoursSection = createElement.div();
    divInfo.appendChild(divHoursSection);
    
        const subheadingHours = createElement.h2("Hours");
        divHoursSection.appendChild(subheadingHours);

        const divHours = createElement.div();
        divHours.classList.add("contact-hours");
        divHoursSection.appendChild(divHours);

        for (let item in contactContent.hours) {
            const day = createElement.text(`${item}: `);
            divHours.appendChild(day);            
            
            const hours = createElement.text(contactContent.hours[item]);
            divHours.appendChild(hours);
        };
}