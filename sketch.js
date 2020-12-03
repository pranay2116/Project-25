	var myground;
	var line,line1,line2,dustbinIMG,dustbin;
	var paperBall,paperIMG;
	var engine,world;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	

	function preload()
	{
		dustbinIMG = loadImage("dustbin.png");
        paperIMG = loadImage("paper.png");
	}

	function setup() 
	{
		createCanvas(1000, 400);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		myground = new Ground(500,390,1000,10);	

		dustbin = createSprite(850,300,200,70);
		dustbin.addImage(dustbinIMG);
		dustbin.scale = 0.5;

		line = createSprite(850,380,140,10);
		line.shapeColor = ("red");
		line.visible = false;
		
		line1 = createSprite(910,300,10,150);
		line1.shapeColor = ("red");
		line1.visible = false;
		
		line2 = createSprite(790,300,10,150);
		line2.shapeColor = ("red");
		line2.visible = false;
		paperBall = new Paper(100,100,20);
		paperBall.addImage(paperIMG);

		Engine.run(engine);
	
	}
 
	function draw() 
	{
	rectMode(CENTER);
	background(0);
	
	KeyPressed();

	myground.display();

	line.display();
	line1.display();
	line2.display();

	paperBall.display();
	
	drawSprites();
	}

	function KeyPressed()
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:85})
		}
	}