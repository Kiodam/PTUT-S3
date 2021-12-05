export default class Map{
    constructor(mapWidth, mapHeight, level){
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.cellSize = 50;
        this.level = level;
    }

    drawMap(context){
        for (let i = 0; i< this.mapWidth; i++){
            for (let j =0; j< this.mapHeight; j++){
                context.strokerStyle = 'black';
                context.strokeRect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
            }
        }
        context.fillStyle="green";
        context.fillRect(this.level.endLevel[0]*this.cellSize+2,this.level.endLevel[1]*this.cellSize+2,this.cellSize-4,this.cellSize-4);
    }
}