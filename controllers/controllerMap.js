export default class ControllerMap{
    constructor(map,hero) {
        this.hero=hero;
        this.map=map;
    }
    checkWin(){
        console.log("map",this.hero.position.x/this.map.cellSize,this.hero.position.y/this.map.cellSize);
        console.log(this.map.level.endLevel);
        if ((this.hero.position.x/this.map.cellSize===this.map.level.endLevel[0])&&(this.hero.position.y/this.map.cellSize===this.map.level.endLevel[1])){
            console.log("VICTORY!!!!");
        }
    }
}