var jerry, tom ,bg ,bg_img ,jerry_ani ,tom_ani,jerry_ani2 ,tom_ani2,jerry_ani3 ,tom_ani3  ;
function preload() {
    //load the images here
    jerry_ani = loadAnimation("mouse1.png");
    bg_img = loadImage("garden.png");
    tom_ani = loadAnimation("cat1.png");
    jerry_ani2 = loadAnimation("mouse2.png","mouse3.png");
    tom_ani2 = loadAnimation("cat2.png","cat3.png");
    jerry_ani3 = loadAnimation("mouse4.png");
    tom_ani3 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    bg = createSprite(400,300);
    bg.scale = 0.85;
    bg.addImage(bg_img);
    jerry = createSprite(100,500);
    jerry.addAnimation("j",jerry_ani);
    jerry.scale = 0.1 ;
    tom = createSprite(700,510);
    tom.addAnimation("t",tom_ani);
    tom.scale = 0.1 ;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if((tom.x-70) - jerry.x < (tom.width - jerry.width)){
        tom.velocityX = 0 ;
        jerry.addAnimation("j",jerry_ani3);
        tom.addAnimation("t",tom_ani3);
    }
    drawSprites();
}

function keyPressed(){
if(keyCode === LEFT_ARROW){
 //For moving and changing animation write code here
 jerry.addAnimation("j",jerry_ani2);
 tom.addAnimation("t",tom_ani2);
 tom.velocityX = -4 ;
}
}
