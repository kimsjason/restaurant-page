import Image from './images/bistro-spark.jpeg';

const homepage = () => {
    const content = document.querySelector('#content');
    
    const logo = document.createElement('h1');
    const image = document.createElement('img');
    const description = document.createElement('p');

    logo.innerHTML = 'Bistro Spark';
    image.src = Image;
    description.innerHTML = "Since 2016, Bistro Spark has brought the best of Italian cuisine to the busy neighborhood of Apgujeong, Seoul. Stepping off the loud and trendy Apgujeong Rodeo Street and into Bistro Spark, diners are transported into a cozy space that evokes the ambiance of Italy's finest restaurants. Chef Shawn Park serves up classic menu items like abalone risotto and wagyu carpaccio that have attracted celebrities and chefs across the world."

    content.appendChild(logo);
    content.appendChild(image);
    content.appendChild(description);
}

export { homepage };