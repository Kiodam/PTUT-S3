export default class Hero {

    constructor(gameWidth, gameHeight) {
        let cellSize = 50;
        this.gameWidht = gameWidth;
        this.gameHeight = gameHeight;
        this.width = cellSize;
        this.height = cellSize;

        this.maxSpeed = 50;
        this.speed = {
            x: 0,
            y: 0
        }

        this.position = {
            x : this.width*5,
            y : this.height*3
        }
    }

    drawHero(context){
        let hero_img = new Image();
        hero_img.src = '../img/bug.png';
        context.drawImage(hero_img,this.position.x,this.position.y,this.width,this.height);
    }

    moveRight(){
        this.speed.x = this.maxSpeed;
        this.position.x += this.speed.x;
    }
    moveUp(){
        this.speed.y = -this.maxSpeed ;
        this.position.y += this.speed.y;
    }
    moveLeft(){
        this.speed.x = -this.maxSpeed;
        this.position.x += this.speed.x;

    }
    moveDown(){
        this.speed.y = this.maxSpeed;
        this.position.y += this.speed.y;
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