const megaMenu = document.getElementById('mega-menu')
const megaMenuSubmenu = document.getElementById('mega-menu-submenu')

megaMenu.addEventListener('mouseenter', () => {
    megaMenuSubmenu.classList.add('show')
})

megaMenu.addEventListener('mouseleave', () => {
    megaMenuSubmenu.classList.remove('show')
})

const dropdown = document.getElementById('dropdown')
const dropdownSubmenu = document.getElementById('dropdown-submenu')

dropdown.addEventListener('mouseenter', () => {
    dropdownSubmenu.classList.add('show')
})

dropdown.addEventListener('mouseleave', () => {
    dropdownSubmenu.classList.remove('show')
})

const mobileToggle = document.getElementById('mobile-menu-icon')
const mainNav = document.getElementById('main-nav')

mobileToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('show')) {
        mainNav.classList.remove('show')
    } else {
        mainNav.classList.add('show')
    }
})

let index = 0
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

const changeSlide = () => {
    if (index < 0) {
        index = slides.length-1
    }

    if (index > slides.length-1) {
        index = 0
    }

    console.log(slides[index])
    console.log(dots[index])

    for (let i=0; i<slides.length; i++) {
        slides[i].style.visibility = 'hidden'
        slides[i].style.opacity = '0'
        dots[i].classList.remove('active')
    }

    slides[index].style.visibility = 'visible'
    slides[index].style.opacity= '1'
    dots[index].classList.add('active')

    index++;

    setTimeout(changeSlide, 5000)
}

changeSlide()