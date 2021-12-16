export default class ControllerHero{
    constructor(hero,controllerMap) {

        // let panel = document.getElementById("playerCommandPanel");
        this.actions = [];
        document.getElementById('gauche').addEventListener('click',()=>{
            // hero.rotate('l');
            // hero.stop();
            let div = document.createElement('div');
            this.actions.push("gauche");
            div.className = "action"
            div.innerHTML += "Gauche" + "<br />";
            document.getElementById('actions').appendChild(div);
            console.log("gauche",this.actions);
        });
        document.getElementById('avancer').addEventListener('click',()=>{
            // hero.move();
            // hero.stop();
            let div = document.createElement('div');
            this.actions.push("avancer")
            div.className = "action"
            div.innerHTML += "Avancer" + "<br />";
            document.getElementById('actions').appendChild(div);
            // panel.innerHTML += "Gauche" + "<br />";
            console.log("avancer",this.actions);
        });
        document.getElementById('droite').addEventListener('click',()=>{
            // hero.rotate('r');
            // hero.stop();
            let div = document.createElement('div');
            this.actions.push("droite");
            div.className = "action"
            // panel.innerHTML += "Gauche" + "<br />";
            div.innerHTML += "Droite" + "<br />";
            document.getElementById('actions').appendChild(div);
            console.log("droite",this.actions);
        });
        document.getElementById('execute').addEventListener('click',async()=>{
           await hero.execute(this.actions);
           controllerMap.checkWin();
           let div = document.createElement('div');
           // console.log("effectué");
           div.innerHTML = "";
           this.actions.splice(0,this.actions.length);
        });
        document.getElementById('clear').addEventListener('click',async()=>{
            this.actions.splice(0,this.actions.length)
            let tab = document.getElementsByClassName("action")
            let size = tab.length
            for (let i = size-1; i >= 0; i--) {
                tab[i].remove();
            }
        });

    }

}

