export default class Level {
    static counter=0;
    constructor(name,category, endLevel) {
        let cellSize = 50;

        Level.counter++;
        this.id=Level.counter;
        this.name = name;
        this.category = category;
        this.endLevel = endLevel;
    }
}