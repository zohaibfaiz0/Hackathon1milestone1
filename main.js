// app.ts
// Function to toggle the visibility of the section
function toggleSectionVisibility() {
    var section = document.getElementById('toggleSection');
    if (section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
// Function to initialize the event listener
function init() {
    var button = document.getElementById('toggleButton');
    if (button) {
        button.addEventListener('click', toggleSectionVisibility);
    }
}
// Initialize the event listener when the document is loaded
document.addEventListener('DOMContentLoaded', init);
