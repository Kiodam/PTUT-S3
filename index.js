import Hero from "./models/Hero.js";
import Map from "./models/Map.js";
import Level from "./models/Level.js";
import ControllerHero from "./controllers/controllerHero.js";
import ControllerMap from "./controllers/controllerMap.js";
import SaveLoad from "./controllers/saveLoad.js";

let canvas = document.getElementById("canvaMap");
let context = canvas.getContext("2d");

const GAME_WIDTH_CASES = 12;
const GAME_HEIGHT_CASES = 12;
const GAME_WIDTH = GAME_WIDTH_CASES*50;
const GAME_HEIGHT = GAME_HEIGHT_CASES*50;
const cellSize = 50;

let hero = new Hero(GAME_WIDTH, GAME_HEIGHT,[5,3]);
let level = new Level("Level1","Beginning",[5,4])
let map = new Map(GAME_WIDTH_CASES,GAME_HEIGHT_CASES,level);


let controllerHero = new ControllerHero(hero,new ControllerMap(map,hero));
level.controlHero = controllerHero;
canvas.width=GAME_WIDTH;
canvas.height= GAME_HEIGHT;

document.getElementById("playerCommandPanel").height=GAME_HEIGHT;
document.getElementById("board").width=GAME_WIDTH;

if (localStorage){
    // saveLoad.getBack();

    localStorage.clear();
}
let saveLoad = new SaveLoad(hero,map,controllerHero);

window.addEventListener('beforeunload',()=>{
    saveLoad.save();
});

let lastTime = 0;

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0,0,canvas.width, canvas.height);
    map.drawMap(context);
    hero.update(deltaTime,map);
    hero.drawHero(context);
    requestAnimationFrame(gameLoop);
}

gameLoop();
