import Hero from "./models/Hero.js";
import ControllerHero from "./controllers/controllerHero.js";

let canvas = document.getElementById("canvaMap");
let context = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let hero = new Hero(GAME_WIDTH, GAME_HEIGHT);

new ControllerHero(hero);

let lastTime = 0;

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0,0,canvas.width, canvas.height);
    hero.update(deltaTime);
    hero.drawHero(context);
    requestAnimationFrame(gameLoop)
}

gameLoop();
