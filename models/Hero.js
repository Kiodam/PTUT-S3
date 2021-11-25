export default class Hero {
    static _FACING_UP=0;
    static _FACING_RIGHT=1;
    static _FACING_DOWN=2;
    static _FACING_LEFT =3;

    constructor(gameWidth, gameHeight) {
        let cellSize = 50;
        this.gameWidht = gameWidth;
        this.gameHeight = gameHeight;
        this.width = cellSize;
        this.height = cellSize;
        this.currentDirection = 2;
        this.maxSpeed = 50;
        this.speed = {
            x: 0,
            y: 0
        }

        this.position = {
            x : this.width*5,
            y : this.height*3
        }

        this.hero_img = [];

        this.hero_img[0] = new Image();
        this.hero_img[0].src = '../img/pp_ptut_up.png';

        this.hero_img[1] = new Image();
        this.hero_img[1].src = '../img/pp_ptut_right.png';

        this.hero_img[2] = new Image();
        this.hero_img[2].src = '../img/pp_ptut_down.png';

        this.hero_img[3] = new Image();
        this.hero_img[3].src = '../img/pp_ptut_left.png';

    }

    drawHero(context){
        context.drawImage(this.hero_img[this.currentDirection],this.position.x,this.position.y,this.width,this.height);
    }

    move(){
        switch(this.currentDirection){
            case 0: {
                this.speed.y = -this.maxSpeed;
                this.position.y += this.speed.y;
            };break;

            case 1: {
                this.speed.x = this.maxSpeed;
                this.position.x += this.speed.x;
            };break;

            case 2: {
                this.speed.y = this.maxSpeed;
                this.position.y += this.speed.y;
            };break;

            case 3: {
                this.speed.x = -this.maxSpeed;
                this.position.x += this.speed.x;
            };break;
        }
    }

    rotate(dir){
        if(dir==='r'){
            if (!(this.currentDirection>=(this.hero_img.length-1))){
                this.currentDirection+=1;
            }else{
                this.currentDirection=0;
            }
        }else if(dir==='l'){
            if (!(this.currentDirection<=0)){
                this.currentDirection-=1;
            }else{
                this.currentDirection=3;
            }
        }

    }

    // moveRight(){
    //     // this.speed.x = this.maxSpeed;
    //     // this.position.x += this.speed.x;
    //     this.currentDirection=Hero._FACING_RIGHT;
    // }
    // moveUp(){
    //     this.speed.y = -this.maxSpeed ;
    //     this.position.y += this.speed.y;
    // }
    // moveLeft(){
    //     // this.speed.x = -this.maxSpeed;
    //     // this.position.x += this.speed.x;
    //     this.currentDirection=Hero._FACING_LEFT;
    // }
    // moveDown(){
    //     this.speed.y = this.maxSpeed;
    //     this.position.y += this.speed.y;
    // }

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