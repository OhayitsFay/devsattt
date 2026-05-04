const year = new Date().getFullYear();
const yearElement = document.querySelector('#year');
if (yearElement) {
    yearElement.textContent = year;
}

const lastModified = document.lastModified;
const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}

const darkBtn = document.querySelector('#darkBtn');

function updateThemeButton(isDarkMode) {
    if (!darkBtn) {
        return;
    }

    const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
    darkBtn.setAttribute('role', 'button');
    darkBtn.setAttribute('tabindex', '0');
    darkBtn.setAttribute('aria-label', label);
    darkBtn.setAttribute('title', label);
}

// Check if dark mode was previously enabled
if (darkBtn && localStorage.getItem('darkMode') === 'enabled') {
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

updateThemeButton(document.body.classList.contains('dark'));

// Toggle dark mode
if (darkBtn) {
const toggleTheme = () => {
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

    updateThemeButton(isDarkMode);
};

darkBtn.addEventListener('click', toggleTheme);
darkBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleTheme();
    }
});
}

