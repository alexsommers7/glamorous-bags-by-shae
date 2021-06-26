// TO TOP BUTTON
const toTopBtn = document.querySelector(".toTop");

window.onscroll = () => {
  document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
    ? (toTopBtn.style.display = "flex")
    : (toTopBtn.style.display = "none");
};

// scroll to top on click
toTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
