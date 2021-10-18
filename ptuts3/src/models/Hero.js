export default class Hero {
    constructor(gameWidth, gameHeight) {
        this.gameWidht = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 50;
        this.height = 50;

        this.maxSpeed = 7;
        this.speed = {
            x: 0,
            y: 0
        }

        this.position = {
            x : gameWidth/2 - this.width/2,
            y : gameHeight/2 - this.height/2
        }
    }

    drawHero(context){
        context.fillStyle = "#0050ff";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveRight(){
        this.speed.x = this.maxSpeed;
    }
    moveUp(){
        this.speed.y = -this.maxSpeed ;
    }
    moveLeft(){
        this.speed.x = -this.maxSpeed;
    }
    moveDown(){
        this.speed.y = this.maxSpeed;
    }

    stop(){
        this.speed.x = 0;
        this.speed.y = 0;
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x<0) this.position.x =0;
        if (this.position.y<0) this.position.y = 0;
        if(this.position.x + this.width >this.gameWidht){
            this.position.x = this.gameWidht-this.width;
        }
        if(this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight-this.height;
        }
    }
}