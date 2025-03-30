// AMDG

const faq_toggles = document.querySelectorAll('.faq-toggle');

// faq_toggles.forEach(toggle => {
//     console.log(toggle);
// })

faq_toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        let container = toggle.parentElement;
        console.log(container);
        // No need to do if else. You can just do
        // container.classList.toggle('active')
        // which does all the conditions behind the scenes.
        if (container.classList.contains('active')) {
            container.classList.remove('active');
        } else {
            container.classList.add('active');
        }
    })
})