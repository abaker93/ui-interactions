const megaMenu = document.getElementById('mega-menu')

megaMenu.addEventListener('mouseenter', () => {
    document.getElementById('mega-menu-submenu').classList.add('show')
})

megaMenu.addEventListener('mouseleave', () => {
    document.getElementById('mega-menu-submenu').classList.remove('show')
})

const dropdown = document.getElementById('dropdown')

dropdown.addEventListener('mouseenter', () => {
    document.getElementById('dropdown-submenu').classList.add('show')
})

dropdown.addEventListener('mouseleave', () => {
    document.getElementById('dropdown-submenu').classList.remove('show')
})