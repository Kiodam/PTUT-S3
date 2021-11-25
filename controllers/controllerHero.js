export default class ControllerHero{
    constructor(hero) {
        let div = document.getElementById("playerCommandPanel");
        document.getElementById('gauche').addEventListener('click',event=>{
            hero.moveLeft();
            hero.stop();
            document.getElementById("score").innerText=parseInt(document.getElementById("score").innerText)+1;
            div.innerHTML += "Gauche" + "<br />";
        });
        document.getElementById('bas').addEventListener('click',event=>{
            hero.moveDown();
            hero.stop();
            document.getElementById("score").innerText=parseInt(document.getElementById("score").innerText)+2;
            div.innerHTML += "Bas" + "<br />";
        });
        document.getElementById('haut').addEventListener('click',event=>{
            hero.moveUp();
            hero.stop();
            document.getElementById("score").innerText=parseInt(document.getElementById("score").innerText)+3;
            div.innerHTML += "Haut" + "<br />";
        });
        document.getElementById('droite').addEventListener('click',event=>{
            hero.moveRight();
            hero.stop();
            document.getElementById("score").innerText=parseInt(document.getElementById("score").innerText)+4;
            div.innerHTML += "Droite" + "<br />";
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