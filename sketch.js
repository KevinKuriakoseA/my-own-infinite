let space, space_Image 
let rocket, rocket_Image 
let meteor, meteor_Image
let gameState
let broken_rocket
let meteors = []
let missle,missle_Image, missles = [];
gameState = "play"
function preload(){
space_Image = loadImage("cool.jpg")
rocket_Image = loadImage("loader3.gif")
meteor_Image = loadImage("images.webp")
missle_Image = loadImage("missle.webp")
}



function setup (){
  createCanvas(windowWidth,windowHeight)
  space = createSprite(width/2,height/2)
  space.addImage("space",space_Image)
  space.scale = 3
  space.velocityY = 4 

  rocket = createSprite(width/2,height/1.2,20,50)
  rocket.addImage("rocket",rocket_Image)
  rocket.setCollider("rectangle", 0, -70, 150, 300, 0 )
  rocket.debug = false
  
}



function draw() {
background(0)
if (gameState == "play"){
  if (space.y > 400){
    space.y = height/2
  }
  //console.log(space.y)
  rocket.x = World.mouseX
  if(frameCount % 40 === 0) {
    meteor = createSprite(Math.round(random(900,-300)))
    meteor.addImage("meteor",meteor_Image)
    meteor.velocityY = 4
   meteors.push(meteor)
   meteor.debug = false 
   meteor.setCollider("rectangle", -40, 0, 150, 150, 0 )
   meteor.lifetime = 180
  }
if (keyDown("space")){
  missle = createSprite(rocket.x,rocket.y,10,50)
  missle.addImage("missle",missle_Image)
  missle.velocityY = -4 
  missle.scale = 0.3
  missles.push(missle);
  missle.lifetime = 180
}
  for(var i = 0;i<meteors.length;i++){
    if (meteors[i].isTouching(rocket)) {
      gameState = "end"
      console.log(i)
      
    }
   for (let j = 0;j<missles.length;j++){
     if (missles[j].isTouching(meteors[i])){
       missles[j].destroy()
       meteors[i].destroy()
     }
   }

   
  }
  
  
  
}
if (gameState == "end"){
  fill(256)
  stroke(0)
  text("GameOver",width/2,height/2)
  text.depth = 0.8
 space.velocityY = 0 
 meteors[i].velocityY = 0 
 missle.velocityY = 0 
}
 
drawSprites()

}