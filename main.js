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

