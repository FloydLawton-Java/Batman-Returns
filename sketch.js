const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var rain = [];
var umbrella;

var maxDrops= 100;

//var score = 0;

function preload() {
    //getBackgroundImg();
    umbrellaIMG= loadImage("umbrella.jpg");
}

function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    umbrella= new Umbrella(250, 700, 100, 200);
    //rain= new Drops(120, 30);
    if(frameCount%1===0){
        rain= new Drops(random(0, 400), random(0, 400))
       // score++;
      }

    ground = new Ground(600,height,1200,20);


}

function draw(){
    background(0);
    
    Engine.update(engine);
    //strokeWeight(4);
    //rain.display();
    rain.display();
    umbrella.display();
    ground.display();  
}