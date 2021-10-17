import { homepage } from './homepage';
import { menu } from './menu';
import { contact } from './contact';
import './main.css';
import Logo from './images/spark-bistro-logo.jpeg';

// nav bar
const nav = () => {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    
    const navbar = document.createElement('nav');
    const logo = document.createElement('img');

    const navlinks = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    
    navbar.classList.add('nav-bar');
    logo.classList.add('logo');
    navlinks.classList.add('nav-links');
    homeTab.classList.add('nav-link');
    menuTab.classList.add('nav-link');
    contactTab.classList.add('nav-link');

    logo.src = Logo;
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
    
    navlinks.appendChild(homeTab);
    navlinks.appendChild(menuTab);
    navlinks.appendChild(contactTab);

    navbar.appendChild(logo);
    navbar.appendChild(navlinks);

    body.prepend(navbar);
}

nav();
homepage();