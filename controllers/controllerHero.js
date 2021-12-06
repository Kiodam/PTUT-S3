export default class ControllerHero{
    constructor(hero,controllerMap) {
        let div = document.getElementById("actions");
        // let panel = document.getElementById("playerCommandPanel");
        let actions = [];
        document.getElementById('gauche').addEventListener('click',()=>{
            // hero.rotate('l');
            // hero.stop();
            actions.push("gauche");
            div.innerHTML += "Gauche" + "<br />";
            // panel.innerHTML += "Gauche" + "<br />";
            console.log("gauche",actions);
        });
        document.getElementById('avancer').addEventListener('click',()=>{
            // hero.move();
            // hero.stop();
            actions.push("avancer");
            div.innerHTML += "Avancer" + "<br />";
            // panel.innerHTML += "Gauche" + "<br />";
            console.log("avancer",actions);
        });
        document.getElementById('haut').addEventListener('click',()=>{
            // hero.move();
            // hero.stop();
            actions.push("avancer");
            // panel.innerHTML += "Gauche" + "<br />";
            div.innerHTML += "Haut" + "<br />";
        });
        document.getElementById('droite').addEventListener('click',()=>{
            // hero.rotate('r');
            // hero.stop();
            actions.push("droite");
            // panel.innerHTML += "Gauche" + "<br />";
            div.innerHTML += "Droite" + "<br />";
            console.log("droite",actions);
        });
        document.getElementById('execute').addEventListener('click',()=>{
           hero.execute(actions);
           div.innerHTML = "";
           actions.splice(0,actions.length);
        });

    }
}