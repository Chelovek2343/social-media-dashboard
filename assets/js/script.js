const body = document.querySelector('body');
const switcher = document.getElementById('switcher');

switcher.addEventListener('click', () => {
    body.classList.toggle('active');
})