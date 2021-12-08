export default class SaveLoad{
    constructor(hero, map) {
        this.hero = hero;
        this.map = map;
    }

    save(e){
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.result.split(/\r\n|\n/);
            dispatchContent(contents);
        };
        reader.readAsText(file);
    }

    dispatchContent(content){
        if(content!==null){
            this.hero.position=content[1];
            this.map.level.endLevel=content[2];
            document.getElementById("actions").innerHTML=content[3];
        }
    }
}