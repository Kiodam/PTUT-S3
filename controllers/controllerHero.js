export default class ControllerHero{
    constructor(hero) {
        let div = document.getElementById("actions");
        document.getElementById('gauche').addEventListener('click',event=>{
            hero.moveLeft();
            hero.hero_img.setAttribute("style","transform: rotate(90deg)");
            hero.stop();
            div.innerHTML += "Gauche" + "<br />";
        });
        document.getElementById('bas').addEventListener('click',event=>{
            hero.moveDown();
            hero.stop();
            div.innerHTML += "Bas" + "<br />";
        });
        document.getElementById('haut').addEventListener('click',event=>{
            hero.moveUp();
            hero.stop();
            div.innerHTML += "Haut" + "<br />";
        });
        document.getElementById('droite').addEventListener('click',event=>{
            hero.moveRight();
            hero.stop();
            div.innerHTML += "Droite" + "<br />";
        });

    }
}