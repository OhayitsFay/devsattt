const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

const lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modified: ${lastModified}`;

const darkBtn = document.querySelector('#darkBtn');

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    // Apply dark mode to all other elements
    document.querySelector('header').classList.add('dark');
    document.querySelector('footer').classList.add('dark');
    document.querySelector('h1').classList.add('dark');
    document.querySelector('nav').classList.add('dark');
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('dark');
    });
    document.querySelectorAll('h2').forEach((h2) => {
        h2.classList.add('dark');
    });
}

// Toggle dark mode
darkBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark');
    
    // Toggle dark mode for other elements
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelector('h1').classList.toggle('dark');
    document.querySelector('nav').classList.toggle('dark');
    document.querySelectorAll('section').forEach((section) => {
        section.classList.toggle('dark');
    });
    document.querySelectorAll('h2').forEach((h2) => {
        h2.classList.toggle('dark');
    });

    // Save dark mode preference
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

