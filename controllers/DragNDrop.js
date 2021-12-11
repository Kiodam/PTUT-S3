import ControllerHero from "./controllerHero";

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
}

function clone(event) {
    const id = event
        .dataTransfer
        .getData('text');

    let clone = document.getElementById(id).cloneNode(true);
    document.getElementById("buttons").appendChild(clone);
    ControllerHero.
}

function test(){
    let blocs = document.getElementById("playerCommandPanel")
    console.log(blocs)
}

function clear(){
    document.getElementById('playerCommandPanel').removeChild(document.querySelector("button.buttonDraggable"));
}