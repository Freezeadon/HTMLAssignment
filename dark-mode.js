    document.addEventListener('DOMContentLoaded', () => {
     const modeSwitch = document.getElementById('mode-switch');
     const currentMode = localStorage.getItem('mode') || 'light-mode';

     if (currentMode === 'dark-mode') {
         document.body.classList.add('dark-mode');
         modeSwitch.innerHTML = '<i class="bi bi-sun"></i> <span class="d-none d-sm-inline">Light Mode</span>';
     }

     modeSwitch.addEventListener('click', () => {
         document.body.classList.toggle('dark-mode');
         const isDarkMode = document.body.classList.contains('dark-mode');
         localStorage.setItem('mode', isDarkMode ? 'dark-mode' : 'light-mode');
         modeSwitch.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> <span class="d-none d-sm-inline">Light Mode</span>'
          : '<i class="bi bi-moon"></i> <span class="d-none d-sm-inline">Dark Mode</span>';
     });
 });