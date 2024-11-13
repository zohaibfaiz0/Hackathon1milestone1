// Function to toggle the visibility of the section
function toggleSectionVisibility() {
    const section = document.getElementById('toggleSection');
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Initialize the event listener
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    if (button) {
        button.addEventListener('click', toggleSectionVisibility);
    }
});
