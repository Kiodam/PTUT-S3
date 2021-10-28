export default class ControllerHero{
    constructor(hero) {
        let div = document.getElementById("actions");
        document.getElementById('gauche').addEventListener('click',event=>{
            hero.moveLeft();
            hero.stop();
            div.innerHTML += " Gauche ";
        });
        document.getElementById('bas').addEventListener('click',event=>{
            hero.moveDown();
            hero.stop();
            div.innerHTML += " Bas ";
        });
        document.getElementById('haut').addEventListener('click',event=>{
            hero.moveUp();
            hero.stop();
            div.innerHTML += " Haut ";
        });
        document.getElementById('droite').addEventListener('click',event=>{
            hero.moveRight();
            hero.stop();
            div.innerHTML += " Droite ";
        });

        // document.addEventListener('keydown', event =>{
        //     switch (event.keyCode){
        //         case 37 : hero.moveLeft();break;
        //         case 38 : hero.moveUp();break;
        //         case 39 : hero.moveRight();break;
        //         case 40 : hero.moveDown();break;
        //     }
        // });
        //
        // document.addEventListener('keyup', event =>{
        //     switch (event.keyCode){
        //         case 37 : hero.stop();break;
        //         case 38 : hero.stop();break;
        //         case 39 : hero.stop();break;
        //         case 40 : hero.stop();break;
        //     }
        // });
    }
}