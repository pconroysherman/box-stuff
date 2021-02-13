
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var ground;
var world,engine;  
var box1,box2,box3;

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world= engine.world;
  var groundOptions = {
    isStatic:true}
  
  ground = Bodies. rectangle(200,375,400,30,groundOptions)
  World.add(world,ground)

  box1=new Box()
  box2=new Box()
  box3=new Box()
}


function draw() {
 
  background ("black"); 
  Engine.update(engine)
  
 rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,30);
box1.display()
box2.display()
box3.display()
}