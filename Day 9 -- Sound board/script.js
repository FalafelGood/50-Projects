// AMDG
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// For each sound in sounds
// create a button with the class 'btn' and the name of the sound in it
// Add the button to the HTML

sounds.forEach(sound => {
    // Note: document is a global var, js knows what it is already.
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    // add event listener to each button
    btn.addEventListener('click', () => {
        // This is supported by HTML5
        stopSongs()
        document.getElementById(sound).play();
    })
    // Why appendChild and not append?
    // Functionally identical, but .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects.
    // A DOMString is a UTF-16 string
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        // There isn't a .stop!
        // We have to pause and reset
        song.pause()
        song.currentTime = 0;
    })
}