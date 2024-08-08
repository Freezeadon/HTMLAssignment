document.addEventListener('DOMContentLoaded', () => {
    // Get the mode switch button element
    const modeSwitch = document.getElementById('mode-switch');

    // Retrieve the current mode from local storage or default to 'light-mode' if not set
    const currentMode = localStorage.getItem('mode') || 'light-mode';

    // If the current mode is 'dark-mode', apply the dark mode class to the body and update the button's icon and text
    if (currentMode === 'dark-mode') {
        document.body.classList.add('dark-mode');
        modeSwitch.innerHTML = '<i class="bi bi-sun"></i> <span class="d-none d-sm-inline">Light Mode</span>';
    }

    // Add an event listener to the mode switch button to toggle between light and dark modes
    modeSwitch.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body element
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is currently active
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Save the current mode to local storage
        localStorage.setItem('mode', isDarkMode ? 'dark-mode' : 'light-mode');

        // Update the button's icon and text based on the current mode
        modeSwitch.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> <span class="d-none d-sm-inline">Light Mode</span>'
                                          : '<i class="bi bi-moon"></i> <span class="d-none d-sm-inline">Dark Mode</span>';
    });
});
