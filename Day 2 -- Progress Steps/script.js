// AMDG

// Get objects from the DOM using getElementById and querySelector
// NOTE: make sure the element in question actually has an ID first ;-)
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Listen for button push on "next"
// On click, run an arrow function that takes no arguments
next.addEventListener('click', () => {
    currentActive++;
    // Don't let currentActive exceed numCircles
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    // Don't let currentActive underflow
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

// Note, we don't need to pass circles into this update function
// since circles is global scope.
function update() {
    // For each circle in circles, check if the corresponding idx
    // is below the currentActive. If it is, set it to active.
    // Otherwise, remove the active property 
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // Get an array of all the active elements in the document.
    const actives = document.querySelectorAll('.active');
    console.log(progress);

    // element.style is how you access the style properties of
    progress.style.width = ((actives.length-1) / (circles.length-1) * 100) + '%';

    // Update button activity
    if (currentActive === 1) {
        // disabled is an attribute of the element, so we can
        // access it directly (not through styles!)
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}