export default class Map{
    constructor(mapWidth, mapHeight){
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.cellSize = 50;
    }

    drawMap(context){
        for (let i = 0; i< this.mapWidth; i++){
            for (let j =0; j< this.mapHeight; j++){
                context.strokerStyle = 'black';
                context.strokeRect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
            }
        }
    }
}