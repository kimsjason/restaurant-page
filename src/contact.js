const contact = () => {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    // contact info
    const contactInfo = document.createElement('div');
    const contactInfoHeader = document.createElement('h2');
    const phone = document.createElement('div');
    const email = document.createElement('div');

    contactInfo.classList.add('contact-info');
    contactInfoHeader.classList.add('header');
    phone.classList.add('phone');
    email.classList.add('email');
    
    contactInfoHeader.innerHTML = 'CONTACT';
    phone.innerHTML = '+82 02-543-8986';
    email.innerHTML = 'shawnpark@outlook.com';

    contactInfo.appendChild(contactInfoHeader);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    // hours & location
    const hoursAndLocation = document.createElement('div');
    const hoursAndLocationHeader = document.createElement('h2');
    const address = document.createElement('div');
    const daysOfOperation = document.createElement('div');
    const lunchHours = document.createElement('div');
    const dinnerHours = document.createElement('div');

    hoursAndLocation.classList.add('hours-and-location');
    hoursAndLocationHeader.classList.add('header');
    address.classList.add('address');
    daysOfOperation.classList.add('days-of-operation');
    lunchHours.classList.add('lunch-hours');
    dinnerHours.classList.add('dinner-hours');

    hoursAndLocationHeader.innerHTML = 'HOURS AND LOCATION';
    address.innerHTML = '330 Apgujeong-ro, Gangnam-gu, Seoul';
    daysOfOperation.innerHTML = 'tues - sat';
    lunchHours.innerHTML = 'lunch: 12pm - 3pm';
    dinnerHours.innerHTML = 'dinner: 6pm - 10pm';

    hoursAndLocation.appendChild(hoursAndLocationHeader);
    hoursAndLocation.appendChild(address);
    hoursAndLocation.appendChild(daysOfOperation);
    hoursAndLocation.appendChild(lunchHours);
    hoursAndLocation.appendChild(dinnerHours);

    // add contact info and hours & location to container
    contact.append(contactInfo);
    contact.append(hoursAndLocation)

    // add map to container
    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.142397871777!2d127.03548301533044!3d37.52814043408367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3886677d925%3A0xd1e237b9033d955e!2sSpark!5e0!3m2!1sen!2sus!4v1634587806354!5m2!1sen!2sus';
    map.width = 400;
    map.height = 300;
    map.loading = 'lazy';
    contact.appendChild(map);

    content.appendChild(contact);

    

}

export { contact };