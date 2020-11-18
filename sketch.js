const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(1000,300,70,70);
    ground = new Ground(600,height,1200,20);

    pig1 = new Pig (850,300,70,70);
    log1 = new Log (840,280,400,20,PI);

        box3 = new Box(700,250,70,70);
        box4 = new Box(1000,250,70,70);
        pig2 = new Pig (850,250,70,70);
        log2 = new Log (840,220,400,20,PI);
        box5 = new Box (850,210,70,70);
        log3 = new Log (830,210,150,20,-PI/4);
        log4 = new Log (870,210,150,20,PI/4);
        bird = new Bird(200,100,70,70);

}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);y
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();


}