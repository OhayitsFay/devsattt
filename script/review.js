const reviews = [
    {
        text: "If you are looking for a reliable clearing agent in Nigeria. Look no further. I was so impressed with the service I received.",
        name: "Mr Festus Adetunji",
        rating: 4,
        company: "F&K Investment Ltd."
    },
    {
        text: "Exceptional service and support. Highly recommend Devsattt Logistics for all your transportation needs.",
        name: "Ms Opara Cynthia",
        rating: 5,
        company: "Dush Enterprises"
    },
    {
        text: "Very efficient and reliable. My goods were delivered on time and in perfect condition.",
        name: "Mr Henry Ogunyimu",
        rating: 5,
        company: "Smith Supplies"
    }
];

let currentReviewIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    displayReview(currentReviewIndex);
    generateDots();
    updateDots(currentReviewIndex);
});

function displayReview(index) {
    const reviewText = document.getElementById('review-text');
    const reviewerName = document.getElementById('reviewer-name');
    const reviewRating = document.getElementById('review-rating');
    const reviewerCompany = document.getElementById('reviewer-company');

    reviewText.textContent = reviews[index].text;
    reviewerName.textContent = reviews[index].name;
    reviewerCompany.textContent = reviews[index].company;

    reviewRating.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = i < reviews[index].rating ? '&#9733;' : '&#9734;';
        reviewRating.appendChild(star);
    }
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentReviewIndex);
    updateDots(currentReviewIndex);
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReview(currentReviewIndex);
    updateDots(currentReviewIndex);
}

function generateDots() {
    const dotsContainer = document.getElementById('dots');
    reviews.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentReviewIndex = index;
            displayReview(currentReviewIndex);
            updateDots(currentReviewIndex);
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

