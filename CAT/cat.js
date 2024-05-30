//CODE TO GENERATE NEW IMAGE AND NEW QUOTE//
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};


function generateImage () {
    const images = [
        'images/IMG_2918.JPG',
       'images/IMG_2941.jpg',
       'images/IMG_3027.JPG'
    ];
    
    const randomIndex = getRandomInt(0, images.length - 1);
    return images[randomIndex];
}

function generateQuote () {
    const quotes = [
        'You can do it!',
        'Believe in yourself',
        'Stay positive!',
    ]
    const randomIndex = getRandomInt(0, quotes.length - 1);
    return quotes[randomIndex];
}

function roogieClick (){
    const pictureBox = document.querySelector('.picture-box');
    const image = generateImage();
    const quote = generateQuote();
    pictureBox.style.visibility = 'visible';
    //on click, run generateImage and generateQuote
    //change visiblilty on picture box to visible
    console.log(quote);
    const imageElement = document.querySelector('.picture img');
    const quoteElement = document.querySelector('.quote-box');
    imageElement.src = image;
    quoteElement.innerText = quote;
};

const roogieButton = document.getElementById('roogieButton');
roogieButton.addEventListener('click', roogieClick);







//BACK BUTTON//
function backButtonClick () {
    window.location.href = '/LANDING/index.html';
 }
 const backButton = document.querySelector('.back-button-box');
 backButton.addEventListener('click', backButtonClick);