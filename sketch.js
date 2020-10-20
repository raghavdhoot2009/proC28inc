const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var man,stones,trees,ground;
var mango1,mango2,mango3,mango4,mango5;

function setup() {

createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
man = new boy(100,650,100,50);
stones = new stone(150,600,10,10);
trees = new tree(600,650,100,50);
ground = new Ground(400,675,400,10);
mango1 = new mango(650,100,10,10);
mango2 = new mango(650,110,10,10);
mango3 = new mango(750,100,10,10);
mango4 = new mango(750,115,10,10);
mango5 = new mango(700,120,10,10);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(230);
man.display();
stones.display();
trees.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
detectcollision(stones,mango1);
detectcollision(stones,mango2);
detectcollision(stones,mango3);
detectcollision(stones,mango4);
detectcollision(stones,mango5);


}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}

function keypressed() {
if (keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
man.attach(stones.body);
}
}