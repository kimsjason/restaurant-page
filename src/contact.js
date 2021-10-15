const contact = () => {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.innerHTML = 'Contact Us';
    
    const address = document.createElement('div');
    address.innerHTML = '330 Apgujeong-ro, Gangnam-gu, Seoul';
    const daysOfOperation = document.createElement('div');
    daysOfOperation.innerHTML = 'Tues-Sat';
    const lunchHours = document.createElement('div');
    lunchHours.innerHTML = '12PM - 3PM';
    const dinnerHours = document.createElement('div');
    dinnerHours.innerHTML = '6PM - 10PM';

    contact.appendChild(address);
    contact.appendChild(daysOfOperation);
    contact.appendChild(lunchHours);
    contact.appendChild(dinnerHours);

    content.appendChild(contact);
}

export { contact };