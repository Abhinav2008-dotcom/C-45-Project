var dyso,king;
var gorilla,rhino,crocodile,Fly,Attack;
var sceptre,scoreHeart,food;
var bg,bgimg,dysoimg,gorillaimg,rhinocerosimg,crocodileimg,flyimg,attackimg,sceptreimg,scoreheartimg,kingimg,foodimg;
var homescreen,homescreenImg;
var gameState=0;
var gorillaGroup,rhinocerosGroup,crocodileGroup;
var edges;

function  preload() {
    bgimg=loadImage("bg.jpg");
    dysoimg=loadImage("Clear dyso.png");
    gorillaimg=loadImage("Clear gorilla.png"); 
    rhinocerosimg=loadImage("Clear rhino.png");
    crocodileimg=loadImage("Clear crocodile.png");
    foodimg=loadImage("Tiger food.png");
    attackimg=loadImage("Attack.jpg");
    flyimg=loadImage("Wings.png");
    sceptreimg=loadImage("The Sceptre.png");
    scoreheartimg=loadImage("Score Heart.png");
    kingimg=loadImage("Evil king.png");
    homescreenImg=loadImage("Home page img.jpg"); 


}

function setup(){
    createCanvas(1000,600);

    bg=createSprite(500,250,10,10);
    bg.addImage("background",bgimg);
    bg.scale=0.3;
    bg.visible=false;
    bg.velocityY=1;

    dyso=createSprite(534,559,20,20);
    dyso.addImage("Dyso",dysoimg);
    dyso.scale=0.7;
    // change the collider radius of dyso
    dyso.setCollider("rectangle",0,0,60,200);
    dyso.debug=true;
    dyso.visible=false;


    scoreheart=createSprite(841,21,10,10);
    scoreheart.addImage("Lives",scoreheartimg)
    scoreheart.scale=0.21





    homescreen=createSprite(500,300,displayWidth,displayHeight);
    homescreen.addImage("home screen",homescreenImg);

    gorillaGroup= new Group();
    rhinocerosGroup=new Group();
    crocodileGroup=new Group();
    
}

function draw(){   
    background(0);

    // when mouse is clicked on homescreen gamestate changes to 1 
  if(mousePressedOver(homescreen)){
        gameState=1;    
    }

    if(gameState===1){
        startgame();    
        spawngorilla();
        spawnrhinoceros();
        spawncrocodile();
        spawnfood();
    }

    if(gorillaGroup.isTouching(dyso)){
        console.log("slow down dyso");
    }

    if(frameCount>=2100){
        textSize(20);
        fill("yellow")
        text("LEVEL COMPLETED",282,196);
    }

    // To make dyso not leave canvas
    edges= createEdgeSprites();
    dyso.bounceOff(edges);
  
    drawSprites();

    textSize(20);
    fill("white")
    text(mouseX+","+mouseY,mouseX,mouseY);

}
function startgame(){
         
    if(bg.y>355){
        bg.y=250
    }
    
    if(keyDown("LEFT_ARROW")){
        dyso.x-=5;
       }
      else if (keyDown("RIGHT_ARROW")){
        dyso.x+=5;
       }
     else if (keyDown("UP_ARROW")){
        dyso.y-=5;
       }
      else if (keyDown("DOWN_ARROW")){
        dyso.y+=5;
       }
  
    bg.visible=true;
    dyso.visible=true;
    homescreen.visible=false;

    this.button1 = createButton('Start');
    this.button1.position(100,120);
    this.button1.style('background', 'yellow'); 
}

function spawngorilla(){
   if(frameCount%200===0){
    gorilla=createSprite(Math.round(random(10,700)),0,20,20);
    gorilla.velocityY=1;
    gorilla.addImage("Gorilla",gorillaimg);
    gorilla.scale=0.5;
    gorilla.lifetime=500;
    gorillaGroup.add(gorilla);
   } 
}

function spawnrhinoceros(){
    if(frameCount%300===0){
    rhinoceros=createSprite(Math.round(random(10,700)),0,20,20);
    rhinoceros.velocityY=1;
    rhinoceros.addImage("Rhinoceros",rhinocerosimg);
    rhinoceros.scale=0.5;
    rhinoceros.lifetime=500;
    rhinocerosGroup.add(rhinoceros);     
    }
}

function spawncrocodile(){
    if(frameCount%500===0){
     crocodile=createSprite(Math.round(random(10,700)),0,20,20);
     crocodile.velocityY=1;
     crocodile.addImage("Crocodile",crocodileimg);
     crocodile.scale=0.3;
     crocodile.lifetime=500;    
     crocodileGroup.add(crocodile);
    } 
 }

 function spawnfood(){
    if(frameCount>=600){
     food=createSprite(Math.round(random(10,700)),0,20,20);
     food.velocityY=1;
     food.addImage("Food",foodimg);
     food.scale=0.3;
     food.lifetime=600;

     
    } 
 }


