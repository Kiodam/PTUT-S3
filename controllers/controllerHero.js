export default class ControllerHero{
    constructor(hero,controllerMap) {
        this.actions = [];
        document.getElementById('gauche').addEventListener('click',()=>{
            let div = document.createElement('div');
            this.actions.push("gauche");
            div.className = "action"
            div.innerHTML += "Gauche" + "<br />";
            document.getElementById('actions').appendChild(div);
        });
        document.getElementById('avancer').addEventListener('click',()=>{
            let div = document.createElement('div');
            this.actions.push("avancer")
            div.className = "action"
            div.innerHTML += "Avancer" + "<br />";
            document.getElementById('actions').appendChild(div);
        });
        document.getElementById('droite').addEventListener('click',()=>{
            let div = document.createElement('div');
            this.actions.push("droite");
            div.className = "action"
            div.innerHTML += "Droite" + "<br />";
            document.getElementById('actions').appendChild(div);
        });
        document.getElementById('execute').addEventListener('click',async()=>{
            let div = document.createElement('div');
            await hero.execute(this.actions);
            controllerMap.checkWin();
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

