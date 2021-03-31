
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, db1,db2,db3;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new paper(100, 20, 10);

	db1 = new Dustbin(700, 670, 150, 20);
	db2 = new Dustbin(765, 610, 20, 100);
	db3 = new Dustbin(635, 610, 20, 100);
	
	ground = new Ground(400, height, width, 40);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  db1.display();
  db2.display();
  db3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,{
			x: 80,
			y: -80
		})
	}
}

