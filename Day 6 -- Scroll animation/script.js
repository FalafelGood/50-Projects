// AMDG
const boxes = document.querySelectorAll('.box');

// Check the position of boxes as we scroll through the window
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    // Inner height is the pixel height of the window.
    const triggerBottom = window.innerHeight * 4/5;
    boxes.forEach(box => {
        // getBoundingClientRect() gets the DOM rect object (which contains things like size, and position relative to the viewport)
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}