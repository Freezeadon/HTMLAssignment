document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    fetch('post.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('col-md-6'); // Using Bootstrap column classes

            // Create the card for each post
            const card = document.createElement('div');
            card.classList.add('card', 'mb-4');

            // Card body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // Card title
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = post.title;

            // Card date
            const cardDate = document.createElement('h6');
            cardDate.classList.add('card-subtitle', 'mb-2');
            cardDate.textContent = post.date;

            // Card content
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.innerHTML = post.content.replace(/\n/g, '<br>'); // Convert newlines to <br> tags


            // Append elements to card body
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardDate);
            cardBody.appendChild(cardText);

            // Append card body to card
            card.appendChild(cardBody);

            // Append card to post element
            postElement.appendChild(card);

            // Append post element to blog list
            blogList.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});

// Dark mode toggle
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
