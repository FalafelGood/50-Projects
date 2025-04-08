// AMDG
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Night mode baby B-)
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})

// This function handles both the analogue and the digital clock.
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate(); // Month range 1-31;
    const day = time.getDay(); // Weekday range 0-6
    const hours = time.getHours(); // Range 0-23 
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    // Set digital time
    // Pad start with numbers
    timeEl.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,'0')}`;

    // Set dates
    dateEl.innerHTML = `${days[day]}, ${months[month]} <div class="circle">${date}</span></div>`;


    // convert from times to angles
    secondsAngle = (seconds / 60) * 360;
    minutesAngle = (minutes / 60) * 360;
    hoursAngle = (hours / 12) * 360


    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursAngle}deg)`;

    console.log("inside");
}

setTime();
let int = setInterval(setTime, 200);