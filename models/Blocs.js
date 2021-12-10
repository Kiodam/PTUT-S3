export default class Blocs {
    constructor(name, category, color) {
        this.name = name;
        this.category = category;
        this.color = color;
    }

    createBut() {
        let but = document.createElement('button');
        but.id = this.name;
        but.name = this.name;
        but.style.backgroundColor = this.color;
        but.innerText = this.name;
        document.getElementById('buttons').appendChild(but);
    }
}