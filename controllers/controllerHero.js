export default class ControllerHero{
    constructor(hero) {
        let div = document.getElementById("actions");
        // let panel = document.getElementById("playerCommandPanel");
        this.actions = [];

        document.getElementById('execute').addEventListener('click',()=>{
           hero.execute(this.actions);
           div.innerHTML = "";
           this.clear();
        });
        document.getElementById('clear').addEventListener('click', () => {
            this.clear();
            console.log('action list has been cleared');
        });

    }
    clear(){
        this.actions.splice(0,this.actions.length);
    }
    addAction(action){
        this.actions.push(action);
    }
}