// AMDG
const labels = document.querySelectorAll('.form-control label')

// This code takes the letters of the label and converts them to individual span elements. For example "Hi" becomes <span>H</span><span>i</span>
// The <span> tag is used to mark up a part of a text of document.
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') // Splits the letters into an array
        .map((letter, idx) => `<span style="transition-delay:${idx**0.8 * 50}ms">${letter}</span>`)
        .join('');
})

// Some commentary on the above code:
// ---------------------------------
// innerHTML: A property in JavaScript that allows getting or setting the HTML content within an element. 
// 
// When we set label.innerHTML, we are changing the underlying html file.
// 
// Don't be decieved by the multiple newlines. The right side of the equals is really one long function call.
//
// First, we call label.innerText which gets the string inside the label object.
//
// Next, we split the string into an array character by character.
// 
// The elements of this array are then mapped (by letter and index) to html strings with CSS styling.
//
// We're essentially writing code to automate a bunch of CSS we wouldn't want to write on our own.
// 
// Literals are used to add a transition-delay to later elements in the string. This is what will give the movement a bit of pow.