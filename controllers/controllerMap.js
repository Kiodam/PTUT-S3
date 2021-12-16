export default class ControllerMap{
    constructor(map,hero) {
        this.hero=hero;
        this.map=map;
    }
    checkWin(){
        if ((this.hero.position.x/this.map.cellSize===this.map.level.endLevel[0])&&(this.hero.position.y/this.map.cellSize===this.map.level.endLevel[1])){
            if(confirm("Bien joué! Voulez-vous maintenant retourner à l'accueil?")){
                window.location.href = "../index.html";
            }
        }
    }
}