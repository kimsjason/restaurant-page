import Img01 from './images/img-01.jpg';

const homepage = () => {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('home');

    const imageContainer = document.createElement('div');
    const img01 = document.createElement('img');
    imageContainer.classList.add('image-container');
    img01.classList.add('img');
    imageContainer.appendChild(img01);

    const container = document.createElement('div');
    const about = document.createElement('h2');
    const description = document.createElement('p');
    container.classList.add('container');
    about.classList.add('about');
    container.appendChild(about);
    container.appendChild(description);

    img01.src = Img01;

    about.innerHTML = 'ABOUT SPARK'
    description.innerHTML = "Since 2016, Bistro Spark has brought the best of Italian cuisine to the busy neighborhood of Apgujeong, Seoul. Stepping off the loud and trendy Apgujeong Rodeo Street and into Bistro Spark, diners are transported into a cozy space that evokes the ambiance of Italy's finest restaurants. Chef Shawn Park serves up classic menu items like abalone risotto and wagyu carpaccio that have attracted celebrities and chefs across the world."
    
    home.appendChild(container);
    home.appendChild(imageContainer);

    content.appendChild(home);
}

export { homepage };