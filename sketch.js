var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg, fairy, fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairyObject = Bodies.circle(400,500,1);

	fairy = createSprite(400,500);
	fairy.addAnimation("flyingFairy",fairyImg);
	fairy.scale = 0.2;
	fairy.setCollider("rectangle",400, 50, 300 , 100, -40);

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() 
{
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(fairy.isTouching(star))
  {
	Matter.Body.setStatic(starBody,true); 
  }

  console.log(star.y);

  drawSprites();

}

function keyPressed()
{

	if (keyCode === DOWN_ARROW) 
	{
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === LEFT_ARROW)
	{
		fairy.x = fairy.x - 10;
	}

	if(keyCode === RIGHT_ARROW)
	{
		fairy.x = fairy.x + 10;
	}

}

