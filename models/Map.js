export default class Map{
    constructor(mapWidth, mapHeight, level){
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
        this.cellSize = 50;
        this._level = level;
        this.walls = [
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,1,1,0,1,1,0,0,0,0,
            0,0,0,1,0,0,0,1,0,0,0,0,
            0,0,0,1,0,0,0,1,0,0,0,0,
            0,0,0,1,0,0,0,1,0,0,0,0,
            0,0,0,1,1,0,1,1,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0,
            0,0,0,0,1,0,1,0,0,0,0,0
        ]
        this.wallImg = new Image();
        this.wallImg.src = "../img/wall.png";
    }

    drawMap(context){
        for (let i = 0; i< this.mapWidth; i++){
            for (let j =0; j< this.mapHeight; j++){
                context.strokerStyle = 'black';
                context.strokeRect(i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
                if(this.walls[i+j*12]===1){
                    context.drawImage(this.wallImg,i*this.cellSize,j*this.cellSize,this.cellSize,this.cellSize);
                }
            }
        }
        context.fillStyle="green";
        context.fillRect(this._level.endLevel[0]*this.cellSize+2,this._level.endLevel[1]*this.cellSize+2,this.cellSize-4,this.cellSize-4);
    }

    get level() {
        return this._level;
    }
}