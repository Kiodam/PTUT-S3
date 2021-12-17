export default class SaveLoad{
    constructor(hero, map,controllerHero) {
        this.hero = hero;
        this.map = map;
        this.controllerHero = controllerHero;
    }

    save(){
        localStorage.setItem("positionHeroX",this.hero.position.x/this.map.cellSize);
        localStorage.setItem("positionHeroY",this.hero.position.y/this.map.cellSize);
        localStorage.setItem("actionsHeroController",this.controllerHero.actions);
        localStorage.setItem("actionsHeroDiv",document.getElementById("actions").innerHTML);
        localStorage.setItem("positionEndLevel",this.map.level.endLevel);
    }

    getBack(){
        this.hero.position.x = localStorage.getItem("positionHeroX");
        this.hero.position.y = localStorage.getItem("positionHeroY");
        this.controllerHero.actions = localStorage.getItem("actionsHeroController");
        document.getElementById("actions").innerHTML = localStorage.getItem("actionsHeroDiv");
        this.map.level.endLevel = localStorage.getItem("positionEndLevel");
        localStorage.clear();
    }

}
