document.addEventListener('DOMContentLoaded', () => {
    showContent('mission');
});

function showContent(contextId) {
    const contexts = document.querySelectorAll('.context');
    const tabs = document.querySelectorAll('.tab');

    contexts.forEach(context => {
        context.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(contextId).classList.add('active');
    document.querySelector(`button[onclick="showContent('${contextId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBannerButton = document.querySelector('.banner .close');
    if (closeBannerButton) {
        closeBannerButton.addEventListener('click', () => {
            closeBannerButton.parentElement.style.display = 'none';
        });
    }
    
    // Hamburger menu toggle
    const hamburgerButton = document.getElementById('hamburgerButton');
    const menuLinks = document.querySelector('.menuLinks');
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

    // Update year dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


