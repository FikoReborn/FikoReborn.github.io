stickyHeader = (header, nav) => {
    // Make nav fixed to top after scrolling past header
    const windowTop = window.scrollY;
    const headerHeight = header.offsetHeight;
    windowTop > headerHeight ? nav.classList.add('fixed-header') : nav.classList.remove('fixed-header');
}

activateMButton = (header, nav) => {
    // Page variables
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const windowTop = window.scrollY;
    const navHeight = nav.offsetHeight;
    const bottomOfPage = windowHeight + windowTop;

    // Selectors
    const aboutLoc = document.getElementsByClassName('about-section')[0].offsetTop;
    const projectsLoc = document.getElementsByClassName('projects')[0].offsetTop;
    const contactLoc = document.getElementsByClassName('contact')[0].offsetTop;
    const buttons = [...document.getElementsByClassName('menu-list')[0].children];

    // Change 'active' button depending on user page position
    if (windowTop >= 0 && windowTop < projectsLoc - 100) {
        buttons.forEach(button => {
            if (button.classList[1]) button.classList.remove('menu-active');
        });
        document.getElementById('about-button').classList.add('menu-active');
    } else if (bottomOfPage > documentHeight - 100) {
        buttons.forEach(button => {
            if (button.classList[1]) button.classList.remove('menu-active');
        });
        document.getElementById('contact-button').classList.add('menu-active');
    } else if (windowTop >= projectsLoc && windowTop < contactLoc) {
        buttons.forEach(button => {
            if (button.classList[1]) button.classList.remove('menu-active');
        });
        document.getElementById('projects-button').classList.add('menu-active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByTagName('header')[0];
    const nav = document.getElementsByTagName('nav')[0];
    const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
    const menuList = document.getElementsByClassName('menu-list')[0];
    window.addEventListener('scroll', () => {
        stickyHeader(header, nav);
        activateMButton(header, nav);
        mobileMenu.addEventListener('click', () => {
            menuList.classList.toggle('active');
        })
    });
})