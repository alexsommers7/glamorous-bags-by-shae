// NAV FUNCTIONALITY

// selecting parent of button AND all nav links for event delegation
const navParent = document.querySelector(".nav");
const navToggle = document.querySelector("#navi-toggle");

// toggle hamburger to x and open bg/nav list on nav button or item click
navParent.addEventListener("click", openNav);

// avoiding arrow syntax for ie 11 support
function openNav() {
    navToggle.classList.toggle("nav-open");
};



// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});