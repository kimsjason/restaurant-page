import { homepage } from './homepage.js';
import { menu } from './menu';
import { contact } from './contact';

const body = document.querySelector('body');
const content = document.querySelector('#content');

// nav bar
const navbar = document.createElement('nav');
const homeTab = document.createElement('a');
const menuTab = document.createElement('a');
const contactTab = document.createElement('a');

homeTab.innerHTML = 'Home';
menuTab.innerHTML = 'Menu';
contactTab.innerHTML = 'Contact';

homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    homepage();
})
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    menu();
})
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    contact();
})


navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);

body.prepend(navbar);

homepage();