Burger = document.querySelector('.burger')
Navbar = document.querySelector('.navbar')
RightNav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

Burger.addEventListener('click',()=>{
    Navbar.classList .toggle('h-nav-resp')
    RightNav.classList .toggle('v-class-resp')
    navList.classList .toggle('v-class-resp')


})