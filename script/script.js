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

    const targetContext = document.getElementById(contextId);
    const targetButton = document.querySelector(`button[onclick="showContent('${contextId}')"]`);

    if (targetContext) {
        targetContext.classList.add('active');
    } else {
        console.warn(`No element with id="${contextId}" found.`);
    }

    if (targetButton) {
        targetButton.classList.add('active');
    } else {
        console.warn(`No button with onclick="showContent('${contextId}')" found.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBannerButton = document.querySelector('.banner .close');
    if (closeBannerButton) {
        closeBannerButton.addEventListener('click', () => {
            closeBannerButton.parentElement.style.display = 'none';
        });
    }
    const hamburger = document.getElementById('hamburgerButton');
    const nav = document.getElementById('menuLinks');

    hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    });

    // Update year dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

