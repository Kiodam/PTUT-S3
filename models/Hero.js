export default class Hero {
    constructor(gameWidth, gameHeight,position) {
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
            x : this.width*position[0],
            y : this.height*position[1]
        }

        this.hero_img = [];

        this.hero_img[0] = new Image();
        this.hero_img[0].src = '../img/bug_up.png';

        this.hero_img[1] = new Image();
        this.hero_img[1].src = '../img/bug_right.png';

        this.hero_img[2] = new Image();
        this.hero_img[2].src = '../img/bug_down.png';

        this.hero_img[3] = new Image();
        this.hero_img[3].src = '../img/bug_left.png';

    }

    drawHero(context){
        context.drawImage(this.hero_img[this.currentDirection],this.position.x,this.position.y,this.width,this.height);
    }

    move(){
        switch(this.currentDirection){
            case 0: {
                this.speed.y = -this.maxSpeed;
                this.position.y += this.speed.y;
            }break;

            case 1: {
                this.speed.x = this.maxSpeed;
                this.position.x += this.speed.x;
            }break;

            case 2: {
                this.speed.y = this.maxSpeed;
                this.position.y += this.speed.y;
            }break;

            case 3: {
                this.speed.x = -this.maxSpeed;
                this.position.x += this.speed.x;
            }break;
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

    stop(){
        this.speed.x = 0;
        this.speed.y = 0;
    }

    async execute(actions){
        for(let i=0; i<actions.length;i++){
            switch (actions[i]){
                case "avancer" : this.move();this.stop();break;
                case"gauche" : this.rotate('l');this.stop();break;
                case"droite" : this.rotate('r');this.stop();break;
                case"retourner" : this.rotate('l');this.stop();break;
            }
            await this.sleep1();
        }
    }

    sleep1(){
        return new Promise(resolve => setTimeout(resolve,1000));
    }


    update(deltaTime,map){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x<0){
            this.position.x =0;
            if(confirm("Scroutch! Voulez-vous recommencer?")){

                window.location.href="../views/game.html"
            }else{
                window.location.href="../index.html";
            }
        }
        if (this.position.y<0){
            this.position.y = 0;
            if(confirm("Scroutch! Voulez-vous recommencer?")){

                window.location.href="../views/game.html"
            }else{
                window.location.href="../index.html";
            }
        }
        if(this.position.x + this.width >this.gameWidht){
            this.position.x = this.gameWidht-this.width;
            if(confirm("Scroutch! Voulez-vous recommencer?")){

                window.location.href="../views/game.html"
            }else{
                window.location.href="../index.html";
            }
        }
        if(this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight-this.height;
            if(confirm("Scroutch! Voulez-vous recommencer?")){

                window.location.href="../views/game.html"
            }else{
                window.location.href="../index.html";
            }
        }
        if (map.walls[(this.position.x/map.cellSize)+(this.position.y/map.cellSize)*12]===1){
            this.position.x-=this.speed.x;
            this.position.y-=this.speed.y;
            if(confirm("Scroutch! Voulez-vous recommencer?")){

                window.location.href="../views/game.html"
            }else{
                window.location.href="../index.html";
            }
        }
    }
}