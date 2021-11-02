
const menuIcon = document.querySelector('.menu__icon')
menuIcon.addEventListener('click', event => {
    const body = document.querySelector('body')
    body.classList.toggle('menu_shown')
})