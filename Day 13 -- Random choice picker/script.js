// AMDG
// Using getElementById seems like better practice in general than querySelector... Not sure when one should be used over the other.
const textArea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

// This automatically focuses on the textarea
textArea.focus()

// Strategy here: Add an event listener, which creates the tags every time a key has been lifted from the keyboard
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value)

    if (event.key == 'Enter') {
        // setTimeout sets a timer which (when it expires) launches the code in the middle.
        setTimeout(() => {
            // event.target is the element that triggered the event.
            // event.target.value is what's inside of that element.
            event.target.value = ''
            // This seems like a less difficult way to do the same thing?
            // textArea.value = '';
        }, 10);
        randomSelect()
    }
})

/* 
Function logic:

input.split(",") 
    Split the input string up into an array seperated by commas

.filter(tag => tag.trim() !== '')
    Creates a "shallow copy" of an array where the elements have been filtered according to the condition. Namely we want to filter every element that when trimmed, is not equal to the empty string ''.

.map(tag => tag.trim())
    Map all elements of the array to their trimmed version.
*/
function createTags(input) {
    // Remove whitespace
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // Clear existing tags
    tagsEl.innerHTML = ''
    /*
    Loop through and make tags:

        Create a span element
        Add the 'tag' class to that element
        Add the tag text to the span
        Append the element to the parent container.
        (This is how it's actually added to the document.)
    */
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    // Number of times it will highlight before stopping
    const times = 30
    // We want this routine to happen say every 100ms.
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag);
        // After 100 ms, we want to unHighlight the tag. How gross does this look!
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    // Stop interval after we wait long enough
    setTimeout(() => {
        clearInterval(interval);
        // Pick one final tag
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag);
        }, 100)
    }, times*100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    // Math.random() gives us a pseudorandom number between 0 and 1.
    // Multiplying by tags puts the range between 0 and num_tags
    // Floor makes sure the number is an integer
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}