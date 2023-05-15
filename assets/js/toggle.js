const button = document.querySelector(".navbar-toggler")
const nav = document.querySelector(".navbar-nav")

button.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle')
})