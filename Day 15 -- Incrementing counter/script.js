// AMDG

/*
Specification:

Set up an interval which increases the numbers until the cap is reached.

All three should reach the same number at the same time.
*/

let twitter_count = document.getElementById('twitter-count');
let youtube_count = document.getElementById('youtube-count');
let facebook_count = document.getElementById('facebook-count');
const counters = [twitter_count, youtube_count, facebook_count];

// Rather than put the maximum values in the js file, TraversyMedia opts to put them as attributes in the CSS class. Turns out you can just define whatever attributes you want!
// const twitter_max = 12000;
// const youtube_max = 5000;
// const facebook_max = 7500;

counters.forEach(counter => {
    // Set initial counter to zero
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    console.log(target)

    const updateCounter = () => {
        const c = +counter.innerText;
        // Note, 200 is a constant -- specifies how many times we should be incrementing
        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // This is a pretty cool recursive strategy -- After one ms, we're doing to run the updateCounter a second time.
            setTimeout(updateCounter, 1);
        } else if (c > target) {
            counter.innerText = `${Math.ceil(target)}`
        }
    }

    updateCounter()
})

// We want a program that will take a fixed amount of time but still runs on an interval... How do I do this?

let interval =  setInterval(() => {

})
