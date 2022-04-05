var shooter;
var standingImg, shootingImg;
var bg, bgImg;
var zombie,zombieImg;
var zombieGroup;
var count =0;

function preload(){
standingImg=loadImage("assets/shooter_2.png");
shootingImg=loadImage("assets/shooter_3.png");
bgImg= loadImage("assets/bg.jpeg");
zombie1Img=loadImage("assets/zombie.png");
zombie2Img=loadImage("assets/zombie2.png");
heartsimg = loadImage("assets/heart_1.png"); 
}

function setup(){
createCanvas (windowWidth, windowHeight);
bg= createSprite(width/2, displayHeight/2+100);
bg.addImage(bgImg);
bg.scale=1.09;

shooter= createSprite(width/4, height/2);
 shooter.addImage(standingImg);
 shooter.scale = 0.3;

 zombie1Group= new Group();
 zombie2Group= new Group();
 bulletGroup = new Group();

heart1 = createSprite (50,50);
heart1.addImage(heartsimg);
heart1.scale = 0.4
  
heart2 = createSprite (130,50);
heart2.addImage(heartsimg);
heart2.scale = 0.4
  
heart3 = createSprite (220,50);
heart3.addImage(heartsimg);
heart3.scale = 0.4
}

function draw(){
  background("grey");

  if(keyDown("UP_ARROW")){
   shooter.y = shooter.y-12;
  }

  if(keyDown("DOWN_ARROW")){
    shooter.y= shooter.y+12;
  }

if(keyWentDown("SPACE")){
  shooter.addImage(shootingImg);
  var bullet = createSprite(shooter.x+20, shooter.y-25, 10,5);
  bullet.velocityX= 7;
  bulletGroup.add(bullet)
  count = count + 1;
  console.log(count);
}
else if(keyWentUp ("SPACE")){
 shooter.addImage(standingImg);
}

if(count >=1){
  heart1.visible = false;
}

if(count >=2){
  heart2.visible = false;
}

if(bulletGroup.isTouching(zombie1Group)){
zombie1.destroy()
}

if(bulletGroup.isTouching(zombie2Group)){
  zombie2.destroy()
  }

zombies1();
zombies2();

drawSprites();
}

function zombies1(){
if( frameCount%210===0  ){
  zombie1 = createSprite(width, height/2+60);
  var ran= Math.round(random(height/2+60,height));
  zombie1.y= ran;
  zombie1.addImage(zombie1Img);
  zombie1.scale= 0.25;

  zombie1.velocityX = -5;
  zombie1Group.add (zombie1);
  zombie1Group.setLifetimeEach(1200);
}
}
function zombies2(){
  if( frameCount%210===0  ){
    zombie2 = createSprite(width, height/2+60);
    var ran= Math.round(random(height/2+10,height));
    zombie2.y= ran;
    zombie2.addImage(zombie2Img);
    zombie2.scale= 0.25;
  
    zombie2.velocityX = -5;
    zombie2Group.add (zombie2);
    zombie2Group.setLifetimeEach(1200);
  }

}

