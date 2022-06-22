const toggleButton = document.querySelector('.toggle-button');
const menuLinks = document.querySelector('.menu-links');

toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('menu-links-show');
    toggleButton.classList.toggle('button-fixed');
});

document.addEventListener('click', (event) => {
    if (event.target.parentElement != toggleButton && event.target != toggleButton) {
        menuLinks.classList.remove('menu-links-show');
        toggleButton.classList.remove('button-fixed');
    }    
});