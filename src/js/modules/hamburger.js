const menuBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

const toggleMenu = () => {
  menuBtn.classList.toggle('is-active')
  nav.classList.toggle('is-active')
  body.classList.toggle('no-scroll')
}

menuBtn.addEventListener('click', toggleMenu)


const menuLinks = nav.querySelectorAll('.nav__link')

menuLinks.forEach(link => link.addEventListener('click', () => {
  if (nav.classList.contains('is-active')) {
    toggleMenu()
  }
}))

