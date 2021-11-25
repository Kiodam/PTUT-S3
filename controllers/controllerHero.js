export default class ControllerHero{
    constructor(hero) {
        let div = document.getElementById("actions");
        document.getElementById('gauche').addEventListener('click',event=>{
            hero.rotate('l');
            hero.stop();
            div.innerHTML += "Gauche" + "<br />";
        });
        document.getElementById('bas').addEventListener('click',event=>{
            hero.move();
            hero.stop();
            div.innerHTML += "Bas" + "<br />";
        });
        document.getElementById('haut').addEventListener('click',event=>{
            hero.move();
            hero.stop();
            div.innerHTML += "Haut" + "<br />";
        });
        document.getElementById('droite').addEventListener('click',event=>{
            hero.rotate('r');
            hero.stop();
            div.innerHTML += "Droite" + "<br />";
        });

    }
}