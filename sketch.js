const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world

function preload() {
//preload the images here

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  hero1=new hero(400,200,50,50)
  rope1=new Rope(hero1.body,{x:300,y:10})
  box1=new box(500,300,40,20)
  ground1=new ground(400,380,800,10)

}

function draw() {
  rope1.display()
  background(255,255,255);
  Engine.update(engine)  
  hero1.display()
  box1.display()
  ground1.display()
  drawSprites()
}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}

