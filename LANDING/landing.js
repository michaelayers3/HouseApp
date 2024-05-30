
function buttonClick(event) {

    const buttonId = event.target.id;

    const buttonActions = [
        { id: 'inside-button', url: '/INSIDE/insidelanding.html' },
        { id: 'outside-button', url: '/OUTSIDE/outsidelanding.html' },
        { id: 'notes-button', url: '../NOTES/noteslanding.html' },
        { id: 'links-button', url: '/LINK/linkslanding.html' },
        { id: 'roogie-button', url: '/CAT/cat.html' }
    ];

    for (let i = 0; i < buttonActions.length; i++) {
        if (buttonActions[i].id === buttonId) {
            window.location.href = buttonActions[i].url;
            break;
        }
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
