

const hammyMenu = document.querySelector('.burger-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hammyMenu.addEventListener('click', () => {
    hammyMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});