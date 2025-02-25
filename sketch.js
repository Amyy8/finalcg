var score = 0;
var happycloud, sadcloud;
var happyGroup, sadGroup;
var backboardimg
var bgi

var happyImage, sadImage; // Declare image variables
var gamestate , end
function preload() {
  happyImage = loadImage("HAPPY_CLOUD-removebg-preview.png");
  sadImage = loadImage("sad-removebg-preview.png");
  backboardimg = loadImage("back.jpg");
}

function setup() {
  createCanvas(800, 800);
  heading = createElement("h1");
  scoreboard = createElement("h1");

  bgi = createSprite(0,200)
 bgi.addImage(backboardimg)
  // Create sprite groups
  happyGroup = createGroup();
  sadGroup = createGroup();
}

function draw() {
  background("lightBlue");



  scoreboard.html("Score: " + score);
  scoreboard.style('color:red');
  scoreboard.position(width - 200, 20);



  drawsadcloud();
  drawhappycloud();

  // Check for collisions
  if (mousePressedOver(sadcloud)) {
    handleSadCloudClick();
  }

  drawSprites();
}

function drawsadcloud() {
  if (frameCount % 40 === 0) {
    sadcloud = createSprite(800, random(20, 780), 40, 40);
    sadcloud.addImage(sadImage);
    sadcloud.scale = 0.3;
    sadcloud.velocityX = -2;

    sadcloud.lifetime = 400;

    sadGroup.add(sadcloud); // Add to sad group
  }
}

function drawhappycloud() {
  if (frameCount % 90 === 0) {
    happycloud = createSprite(800, random(20, 780), 40, 40);
    happycloud.addImage(happyImage);
    happycloud.scale = 0.5;
    happycloud.velocityX = -2;

    happyGroup.add(happycloud); // Add to happy group
  }
}

function mousePressedOver(sprite) {
  
  return (
    mouseX > sprite.position.x - sprite.width / 2 &&
    mouseX < sprite.position.x + sprite.width / 2 &&
    mouseY > sprite.position.y - sprite.height / 2 &&
    mouseY < sprite.position.y + sprite.height / 2
  );
}

function handleSadCloudClick() {
  score++;
  sadcloud.remove(); 
}

//function isTouching(sadcloud,bgi) {
  //gameState=2
 // swal({
   // text: "Thank you for playing",
   // confirmButtonText: "Ok"
  //  });
  
//}
function gameOver() {
  swal({
    text: "Game Over! Final Score: " + score,
    confirmButtonText: "Restart",
    closeOnConfirm: false
  }, function () {
    resetGame(); // Restart the game when the user clicks "Restart"
  });
}

function resetGame() {
  gamestate = 1;
  score = 0;
  sadGroup.removeSprites();
  happyGroup.removeSprites();
}
  
