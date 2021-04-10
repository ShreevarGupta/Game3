const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world, engine;
var bg;
var ground1, ground2, ground3, ground4, ground5;
var tile1, tile2, tile3, tile4, tile5;
var player;


function preload() {

    bg = loadImage("bg.jpg");

}


function setup() {

    createCanvas(10000, 850);

    engine = Engine.create();
    world = engine.world;

    //creating objects from classes

    ground1 = new Tile1(100, 790, 200, 300);
    ground2 = new Tile2(400, 760, 200, 400);
    ground3 = new Tile2(1030, 800, 200, 400);
    ground4 = new Tile1(1230, 860, 200, 300);
    ground5 = new Tile1(1430, 860, 200, 300);
    ground6 = new Tile1(1630, 860, 200, 300);
    ground7 = new Tile1(1830, 860, 200, 300);

    tile1 = new Tile3(720, 500, 300, 80);
    tile2 = new Tile3(1370, 540, 300, 80);

    player = new Player(100, 650, 90, 180);

}


function draw() {

    background(bg);

    Engine.update(engine);

    //displaying objects

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();

    tile1.display();
    tile2.display();

    player.display();

    drawSprites();
    
}   
