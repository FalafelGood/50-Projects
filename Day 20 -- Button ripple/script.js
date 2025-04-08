// AMDG
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // X and Y viewport coordinates of where the click occoured.
        const x = e.clientX;
        const y = e.clientY;

        // Viewport coordinates of the button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px'

        console.log(circle);
        this.appendChild(circle);

        // We probably want to remove the circle at some point...
        setTimeout(() => {
            circle.remove();
        }, 500);
    })
})