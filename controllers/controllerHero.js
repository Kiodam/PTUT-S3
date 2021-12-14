export default class ControllerHero{
    constructor(hero,controllerMap) {
        let div = document.getElementById("actions");
        // let panel = document.getElementById("playerCommandPanel");
        this.actions = [];
        document.getElementById('gauche').addEventListener('click',()=>{
            // hero.rotate('l');
            // hero.stop();
            this.actions.push("gauche");
            div.innerHTML += "Gauche" + "<br />";
            // panel.innerHTML += "Gauche" + "<br />";
            console.log("gauche",this.actions);
        });
        document.getElementById('avancer').addEventListener('click',()=>{
            // hero.move();
            // hero.stop();
            this.actions.push("avancer");
            div.innerHTML += "Avancer" + "<br />";
            // panel.innerHTML += "Gauche" + "<br />";
            console.log("avancer",this.actions);
        });
        document.getElementById('haut').addEventListener('click',()=>{
            // hero.move();
            // hero.stop();
            this.actions.push("avancer");
            // panel.innerHTML += "Gauche" + "<br />";
            div.innerHTML += "Haut" + "<br />";
        });
        document.getElementById('droite').addEventListener('click',()=>{
            // hero.rotate('r');
            // hero.stop();
            this.actions.push("droite");
            // panel.innerHTML += "Gauche" + "<br />";
            div.innerHTML += "Droite" + "<br />";
            console.log("droite",this.actions);
        });
        document.getElementById('execute').addEventListener('click',async()=>{
           await hero.execute(this.actions);
           controllerMap.checkWin();
           // console.log("effectué");
           div.innerHTML = "";
           this.actions.splice(0,this.actions.length);
        });

    }
}