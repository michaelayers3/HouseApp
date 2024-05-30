//SAVE NOTES//

function saveNotes () {
    alert('This is where the notes will be saved.');
}
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveNotes);

//BACK BUTTON//
function backButtonClick () {
    window.location.href = '/LANDING/index.html';
 }
 const backButton = document.querySelector('.back-button-box');
 backButton.addEventListener('click', backButtonClick);