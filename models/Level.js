
export default class Level {
    static counter=0;
    // static bAvancer = new Blocs('avancer', 'deplacement', ' rgba(0,136,169,1)');
    // static bGauche = new Blocs('gauche', 'deplacement', ' rgba(0,136,169,1)');
    // static bDroite = new Blocs('droite', 'deplacement', ' rgba(0,136,169,1)');
    constructor(name,category, endLevel) {
        let cellSize = 50;

        Level.counter++;
        this.id=Level.counter;
        this.name = name;
        this.category = category;
        this.endLevel = endLevel;
        this.blocs = this.chooseBlocs();
    }
    init(){
        for(let i=0; i<this.blocs.length; i++){
            // let but = document.createElement('button');
            // but.id = this.blocs[i].id;
            // but.name = this.blocs[i].name;
            // but.style.backgroundColor = this.blocs[i].color;
            // but.innerText = this.blocs[i].name;
            // document.getElementById('buttons').appendChild(but);
            let but = document.createElement('button');
            but.id = this.blocs[i];
            but.name = this.blocs[i];
            but.innerText = this.blocs[i];
            document.getElementById('buttons').appendChild(but);
        }

    }
    chooseBlocs(){
        let blocChoosed = []
        switch(this.category){
            case 'Beginning': blocChoosed.push("avancer", "droite", "gauche"); break;
            // case 'Beginning': blocChoosed.push(Level.bAvancer, Level.bGauche, Level.bDroite); break;
            default: return
        }
        return blocChoosed;
    }

}
