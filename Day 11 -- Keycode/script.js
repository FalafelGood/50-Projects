// AMDG
const container = document.getElementById('container');

// e is the event that transpires when a button is pressed.
window.addEventListener('keydown', (event) => {
    // I think insert overwrites whatever is previously there
    // Use with caution!
    container.innerHTML = `
    <div class="info-box">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>
        event.key
      </small>
    </div>

    <div class="info-box">
      ${event.keyCode}
      <small>
        event.keyCode
      </small>
    </div>

    <div class="info-box">
      ${event.code}
      <small>
        event.code
      </small>
    </div>
    `
})