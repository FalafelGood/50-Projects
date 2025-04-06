// AMDG
const smallCups = document.querySelectorAll('.small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');

litres.innerText = '2L';

// Set up an event listener for each cup
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        updateLittleCups(idx);
        updateBigCup(idx)
    })
})

function updateLittleCups(idx) {
    console.log(`Cup #${idx} was picked`);
    smallCups.forEach((cup, idx2) => {
        if (idx > idx2) {
            cup.classList.remove('full');
        } else if (idx < idx2) {
            cup.classList.add('full');
        } else {
            cup.classList.toggle('full');
        }
    })
}

function updateBigCup(idx) {
    console.log("Big cup is updated here");
    let num_cups = smallCups.length;
    let num_full_cups = document.querySelectorAll('.small.full').length
    let num_empty_cups = num_cups - num_full_cups;
    percentage.innerText = 2*(num_empty_cups / num_cups) + ' L';
    
    if(num_empty_cups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        litres.style.visibility ='visible';
        percentage.style.height = `${(num_empty_cups / num_cups)*100}%`
    }

    // Seems ok to have more than one if statement here?
    if (num_empty_cups === num_cups) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
    }

    litres.innerText = 2*(1 - (num_empty_cups / num_cups)) + ' L';
}
