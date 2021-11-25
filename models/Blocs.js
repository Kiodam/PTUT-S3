export default class Blocs {

    constructor(color,cat,action) {
        this.color = color
        this.cat = cat
        this.action = action
    }

    getColor() {
        return this.color
    }

    setColor(color) {
        this.color = color

    }

    getCat() {
        return this.cat
    }

    getAction() {
        return this.action
    }
}