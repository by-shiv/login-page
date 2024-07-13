const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.sign-in');
const registerLink = document.querySelector('.sign-up');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});