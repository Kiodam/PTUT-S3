
export default class Level {
    static counter=0;
    constructor(name,category, endLevel) {
        let cellSize = 50;

        Level.counter++;
        this.id=Level.counter;
        this.name = name;
        this.category = category;
        this.endLevel = endLevel;
        this.blocs = this.chooseBlocs();
        this.controlHero = null;
    }

    init(){
        for(let i=0; i<this.blocs.length; i++){
            let but = document.createElement('button');
            but.id = this.blocs[i];
            but.name = this.blocs[i];
            but.innerText = this.blocs[i];
            // let panel = document.getElementById("playerCommandPanel");
            but.addEventListener('click',()=>{
                document.getElementById('actions').innerHTML += but.name + "<br />";
                this.controlHero.addAction(but.name);
            });
            document.getElementById('buttons').appendChild(but);
        }

    }
    chooseBlocs(){
        let blocChoosed = []
        switch(this.category){
            case 'Beginning': blocChoosed.push("avancer", "droite", "gauche"); break;
            default: return
        }
        return blocChoosed;
    }

}
