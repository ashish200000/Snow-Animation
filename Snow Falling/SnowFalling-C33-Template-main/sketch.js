const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bg_img
var snow
var snow_img
var snow = []
var maxSnow = 200


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  
}
function preload(){
  bg_img = loadImage("snow3.jpg")
  


}

function draw() {
  background(bg_img);  
  Engine.update(engine);

  for(var i = 0; i < maxSnow; i++){
    snow.push(new Snow(random(1,10000),3,9))
  }
  for(var i = 0 ; i<snow.length; i++){
    snow[i].display();

  }



  
}