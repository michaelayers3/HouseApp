//LINK BUTTONS//
function buttonClick(event) {

    const buttonId = event.target.id;

    const buttonActions = [
        { id: 'link1', url: 'https://www.youtube.com' },
        { id: 'link2', url: 'https://www.google.com' },
        { id: 'link4', url: 'https://www.twitter.com' },
        { id: 'link5', url: 'https://www.facebook.com' },
    ];

    for (let i = 0; i < buttonActions.length; i++) {
        if (buttonActions[i].id === buttonId) {
            window.location.href = buttonActions[i].url;
            break;
        }
    }
}

const buttons = document.querySelectorAll('.link-button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});




//BACK BUTTON//
function backButtonClick () {
    window.location.href = '/LANDING/index.html';
 }
 const backButton = document.querySelector('.back-button-box');
 backButton.addEventListener('click', backButtonClick);