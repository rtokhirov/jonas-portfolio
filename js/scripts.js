const toggleBtn = document.querySelector(".header__toggle--btn")

const nav = document.querySelector('nav')

toggleBtn.addEventListener('click', () => { nav.classList.toggle('hidden') })