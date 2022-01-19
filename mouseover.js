const clearButton = document.querySelector('.clear-tasks');
const Card = document.querySelector('.card');
const head = document.querySelector('h5');
 
// Click
// clearButton.addEventListener('click', runEvent);

//double click
//clearButton.addEventListener('click', runEvent);

// clearButton.addEventListener('mousedown', runEvent);

// clearButton.addEventListener('mouseup', runEvent)

Card.addEventListener('mouseenter', runEvent)


// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    head.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
































