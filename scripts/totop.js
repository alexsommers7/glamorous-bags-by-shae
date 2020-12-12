// TO TOP BUTTON
const toTopBtn = document.querySelector(".toTop");

window.onscroll = () => {
    (document.body.scrollTop > 500)
    ? toTopBtn.style.display = "flex"
    : toTopBtn.style.display = "none";
};

// scroll to top on click
toTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox, and Opera
});
