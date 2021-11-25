let currentDroppable = null;
let obj = document.getElementById('gauche');

obj.onmousedown = function(event) {

    let shiftX = event.clientX - obj.getBoundingClientRect().left;
    let shiftY = event.clientY - obj.getBoundingClientRect().top;

    obj.style.position = 'absolute';
    obj.style.zIndex = 1000;
    document.body.append(obj);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        obj.style.left = pageX - shiftX + 'px';
        obj.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        obj.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        obj.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null lorsque nous étions sur un élément déposable avant cet évènement
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null si nous ne n'atterrissions pas sur un élément déposable maintenant
                // (peut être a juste quitte l'objet déposable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    obj.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        obj.onmouseup = null;
    };

};

function enterDroppable(elem) {
    elem.style.background = 'pink';
}

function leaveDroppable(elem) {
    elem.style.background = '';
}

obj.ondragstart = function() {
    return false;
};