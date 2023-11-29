// common.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkModeEnabled);
}

// Check if the user has a dark mode preference in local storage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode === 'true') {
    // If dark mode was enabled, apply it on page load
    toggleDarkMode();
}

// Add a click event listener to the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
