// AMDG
const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide");
const leftSlide = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const numPhotos = document.querySelectorAll('.right-slide div').length;

// Position the leftSlide correctly...
// It will be moving up as photo tracks downward.
// Using % seems to work just as well as vh
let slideIndex = 0;
leftSlide.style.top = `-${(numPhotos - 1) * 100}%`;

upButton.addEventListener("click", () => {
    console.log("up button clicked");
    slideIndex++;
    if (slideIndex > (numPhotos-1)) {
        slideIndex = 0;
    }
    leftSlide.style.transform = `translateY(${slideIndex * 100}%)`;
    rightSlide.style.transform = `translateY(-${slideIndex * 100}%)`;
})

downButton.addEventListener("click", () => {
    console.log("down button clicked");
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = (numPhotos - 1);
    }
    leftSlide.style.transform = `translateY(${slideIndex * 100}%)`;
    rightSlide.style.transform = `translateY(-${slideIndex * 100}%)`
})