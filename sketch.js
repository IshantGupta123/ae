const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,hammer,stone;
var balls;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,30);
hammer=new Hammer(200,500,70,30);
stone=new Stone(300,670,60,60);
balls=new Ball(100,150,60,30);
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(100)
ground.display();
  hammer.display();
stone.display();
ellipseMode(CENTER);
balls.display();
 drawSprites();
}



