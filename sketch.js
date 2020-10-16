const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
/*
function preload()
{
}
*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash = new trash(200,550,20);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	trash.display();
	rectMode(CENTER);
	
  
 
 
}

