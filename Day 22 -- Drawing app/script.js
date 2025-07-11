// AMDG

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 20;
let isPressed = false;
let color = colorBtn.value;
let x;
let y;

// In this event listener, we set the properties of various global variables so that other functions can access them.
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2*size;
    ctx.stroke()
}

increaseBtn.addEventListener('click', () => {
    if (size < 60) {
        size += 5;
        sizeEl.innerText = `${size}`;
    }
})

decreaseBtn.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        sizeEl.innerText = `${size}`;
    }
})

colorBtn.addEventListener('change', (e) => {
    color = e.target.value;
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

// drawCircle(100, 100);
// drawLine(300, 300, 500, 500);