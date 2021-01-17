const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground(600,height,1200,20);


    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(700,320,70,70);
    box8 = new Box(700,320,70,70);
    box9 = new Box(700,320,70,70);
    box10 = new Box(700,320,70,70);
    ball1 = new ball(200,200,70,70);
  
   slingshot = new SlingShot(ball1.body,{x:200, y:50});
}

function draw(){
    
    background("green");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
    ball1.display();
   slingshot.display(); 
    
}
function mouseDragged(){
   
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
   
}




