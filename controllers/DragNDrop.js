function onDragStart(event) {
    event
        .dataTransfer
        .setData('text', event.target.id);
    console.log(event
        .dataTransfer.getData('text'));
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
}

function clone(event) {
    const id = event
        .dataTransfer
        .getData('text');

    let clone = document.getElementById(id).cloneNode(true);
    clone.id = id+1;
    document.getElementById("playerCommandPanel").appendChild(clone);
}

function execute(){
    let blocs = document.getElementById("playerCommandPanel")
    console.log(blocs)
}

function clear(){
    document.getElementById('playerCommandPanel').removeChild(document.querySelector("button.buttonDraggable"));
}