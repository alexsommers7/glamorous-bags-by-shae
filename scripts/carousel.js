// dom variables
const slides = document.querySelectorAll(".testimonial");
const numSlides = slides.length;
const dotContainer = document.querySelector(".testimonial__dots");
const rightArr = document.getElementsByClassName("testimonial__arrow--right")[0];

// initialize counter var
let position = 0;

// create a dot for each slide
slides.forEach(slide => {
    let newContainer = document.createElement("div");
    newContainer.classList.add("testimonial__dot");
    dotContainer.appendChild(newContainer);
});

// add fill to first dot
    const dots = document.querySelectorAll(".testimonial__dot");
    dots[0].classList.add("isActive");

// slider functionality
function carousel(n, direction) {
    // if at last item, reset to first
    if (n >= numSlides) {
        n = 0;
    }
    // if at first item, go to last
    else if (n < 0) {
        n = (numSlides - 1);
    }
    // remove active class for all slides & dots
    for (let i = 0, s = numSlides; i < s; i++) {
        slides[i].classList.remove("isActive");
        dots[i].classList.remove("isActive");
    }
    // set active class to current slide & dot
    slides[n].classList.add("isActive");
    dots[n].classList.add("isActive");
    // update counter variable
    return position = n;
};