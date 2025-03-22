// AMDG
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const greeting = document.querySelector('.greeting');

// Load percentage
let load = 0;

// Run the bluring function in an interval every 30ms
let int = setInterval(blurring, 30);
// Reveal the greeting in 3 seconds
const myTimeout = setTimeout(activate_greeting, 3000);

// Run this blurring function in an interval every 30 ms
function blurring() {
    load++;

    // If load percentage exceeds 99, we want to stop the interval that's calling the bluring function.
    if (load > 99) {
        clearInterval(int);
    }

    // innerText attributes gives you the text inside container.
    loadText.innerText = `${load}%`;
    loadText.style.opacity = (1 - load*0.01);
    // bg.style.filter = `blur(0)`;
    bg.style.filter = `blur(${30 - load*(3/10)}px)`;
}

function activate_greeting() {
    greeting.classList.add('active');
    // This isn't necessary, but my feeling is it's good practice?
    clearTimeout(myTimeout);
}