// AMDG
const body = document.body;
const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragover', dragOver);
fill.addEventListener('dragenter', dragEnter);
fill.addEventListener('drop', dragDrop);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// An elipses under the function name is a suggested code acton. Here VSCode is recommending that I change this function into a class. One possible reason for this is that the `this` keyword refers to the domElement that fired the function, and not the function itself. This is obfuscated in the code.
function dragStart() {
    // this.classList.add('hold');
    this.className += ' hold'
    // We set the classname to 'invisible' once the square is grabbed. We need a timeout for this so that the hold property is applied first before invisible.
    setTimeout(() => this.className = 'invisible', 0);
}

// Why would I want a constructor and not a function?
function dragEnd() {
    this.className = 'fill'
}

// What preventDefault do?
function dragOver(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}