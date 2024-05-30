function buttonClick(event) {

    const buttonId = event.target.id;

    const buttonActions = [
        { id: 'room1', url: '/ROOM/roompage.html' },
        { id: 'room2', url: '/ROOM/roompage.html' },
        { id: 'room3', url: '/ROOM/roompage.html' },
        { id: 'room4', url: '/ROOM/roompage.html' },
        { id: 'room5', url: '/ROOM/roompage.html' },
        { id: 'room6', url: '/ROOM/roompage.html' },
        { id: 'room7', url: '/ROOM/roompage.html' },
        { id: 'room8', url: '/ROOM/roompage.html' },
    ];

    for (let i = 0; i < buttonActions.length; i++) {
        if (buttonActions[i].id === buttonId) {
            window.location.href = buttonActions[i].url;
            break;
        }
    }
}

const buttons = document.querySelectorAll('.room-button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});

function backButtonClick () {
   window.location.href = '/LANDING/index.html';
}
const backButton = document.querySelector('.back-button-box');
backButton.addEventListener('click', backButtonClick);

