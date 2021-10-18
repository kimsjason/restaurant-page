import Img01 from './images/img-01.jpg';

const homepage = () => {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    const imageContainer = document.createElement('div');
    const img01 = document.createElement('img');
    const container = document.createElement('div');
    const about = document.createElement('h2');
    const description = document.createElement('p');
    const reservation = document.createElement('a');

    home.classList.add('home');
    imageContainer.classList.add('image-container');
    img01.classList.add('img');
    imageContainer.appendChild(img01);
    container.classList.add('container');
    about.classList.add('about');
    reservation.classList.add('reservation');

    about.innerHTML = 'ABOUT SPARK'
    description.innerHTML = "Since 2016, Bistro Spark has brought the best of Italian cuisine to the busy neighborhood of Apgujeong, Seoul. Stepping off the loud and trendy Apgujeong Rodeo Street and into Bistro Spark, diners are transported into a cozy space that evokes the ambiance of Italy's finest restaurants. Chef Shawn Park serves up classic menu items like abalone risotto and wagyu carpaccio that have attracted celebrities and chefs across the world."
    img01.src = Img01;
    reservation.innerHTML = 'Reservations';
    reservation.href = 'https://app.catchtable.co.kr/ct/shop/spark';
    reservation.target = '_blank';

    container.appendChild(about);
    container.appendChild(description);
    container.appendChild(reservation);
    
    home.appendChild(container);
    home.appendChild(imageContainer);

    content.appendChild(home);
}

export { homepage };