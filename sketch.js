const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
bgImg = loadImage("image/bg.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(500, 800, 1500, 20);
  box1 = new Box(800, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(800, 100, 70, 70);
  box4 = new Box(800, 100, 70, 70);
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);
  box13 = new Box(900, 100, 70, 70);
  box14 = new Box(900, 100, 70, 70);
  box15 = new Box(1000, 100, 70, 70);
  box16 = new Box(1000, 100, 70, 70);
  box17 = new Box(1000, 100, 70, 70);
  box18 = new Box(1000, 100, 70, 70);

  monster = new Monster(700, 100, 400);
  hero = new Hero(200, 200, 450);

  rope = new Fly(hero.body, {x: 100, y: 20})

}

function draw() {
  background(bgImg);
  Engine.update(engine);
  
  ground.display();
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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  monster.display();
  hero.display();
  rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

