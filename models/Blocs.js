const canvas = document.getElementById('playerCommandPanel');



function start(event, id) {
    let currentDroppable = null;

    let obj = document.getElementById(id);

    let shiftX = event.clientX - obj.getBoundingClientRect().left;
    let shiftY = event.clientY - obj.getBoundingClientRect().top;

    obj.style.position = 'absolute';
    obj.style.boxShadow = '10px 5px 5px black';
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

    }

    document.addEventListener('mousemove', onMouseMove);

    obj.onclick = function() {
        document.removeEventListener('mousemove', onMouseMove);
        obj.style.boxShadow = '';
        canvas.appendChild(obj);

    };

};


obj.ondragstart = function() {
    return false;
};