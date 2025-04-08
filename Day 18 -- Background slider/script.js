// AMDG
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
let numPhotos = slides.length;
setBgToBody()

// Set body background to whatever the current image is
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

leftBtn.addEventListener('click', () => {
    if (activeSlide != 0) {
        slides[activeSlide].classList.remove('active');
        activeSlide--;
        slides[activeSlide].classList.add('active');
        setBgToBody();
    }
    console.log(activeSlide);
})

rightBtn.addEventListener('click', () => {
    if (activeSlide != numPhotos - 1) {
        slides[activeSlide].classList.remove('active');
        activeSlide++;
        slides[activeSlide].classList.add('active');
        setBgToBody();
    }
    console.log(activeSlide);
})

