const popup = document.querySelector('.card__share-btn');

popup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.parentElement.classList.toggle('open');
})