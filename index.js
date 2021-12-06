import Hero from "./models/Hero.js";
import Map from "./models/Map.js";
import Level from "./models/Level.js";
import ControllerHero from "./controllers/controllerHero.js";
import ControllerMap from "./controllers/controllerMap.js";

let canvas = document.getElementById("canvaMap");
let context = canvas.getContext("2d");


const GAME_WIDTH_CASES = 12;
const GAME_HEIGHT_CASES = 12;
const GAME_WIDTH = GAME_WIDTH_CASES*50;
const GAME_HEIGHT = GAME_HEIGHT_CASES*50;

let hero = new Hero(GAME_WIDTH, GAME_HEIGHT);
let level = new Level("Level1","Beginning",[5,4])
let map = new Map(GAME_WIDTH_CASES,GAME_HEIGHT_CASES,level);
canvas.width=GAME_WIDTH;
canvas.height= GAME_HEIGHT;

document.getElementById("playerCommandPanel").height=GAME_HEIGHT;
document.getElementById("board").width=GAME_WIDTH;

new ControllerHero(hero,new ControllerMap(map,hero));


let lastTime = 0;

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0,0,canvas.width, canvas.height);
    map.drawMap(context);
    hero.update(deltaTime);
    hero.drawHero(context);
    requestAnimationFrame(gameLoop);
}

gameLoop();
