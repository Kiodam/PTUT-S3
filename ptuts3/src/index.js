import Hero from "./models/Hero.js";
import Map from "./models/Map.js";
import ControllerHero from "./controllers/controllerHero.js";

let canvas = document.getElementById("canvaMap");
let context = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
const GAME_WIDTH_CASES = 11;
const GAME_HEIGHT_CASES = 8;

let hero = new Hero(GAME_WIDTH, GAME_HEIGHT);
let map = new Map(GAME_WIDTH_CASES,GAME_HEIGHT_CASES);

new ControllerHero(hero);

let lastTime = 0;

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0,0,canvas.width, canvas.height);
    map.drawMap(context);
    hero.update(deltaTime);
    hero.drawHero(context);
    requestAnimationFrame(gameLoop)
}

gameLoop();
