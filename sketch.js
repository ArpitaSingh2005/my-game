var astro, planet1, pl2, planet3, star, rock1, rock2, rock3
var astroImg, planet1Img, plImg, planet3Img, starImg, rockImg1, rockImg2, rockImg3
var rock1G, plG

var PLAY = 1
var END = 0






var distance = 0
var gameState = PLAY
function preload() {
  starImg = loadImage("star.jpg")
  astroImg = loadImage("astro.png")
  rockImg1 = loadImage("rock.png")
  rockImg2 = loadImage("rock2.jpg")
  rockImg3 = loadImage("rock3.jpg")
  plImg = loadImage("pl.png")

}

function setup() {

  createCanvas(600, 600)


  star = createSprite(300, 300)
  star.addImage("star", starImg)
  star.scale = 1.2


  astro = createSprite(200, 480, 30, 30)
  astro.addAnimation("astro", astroImg)
  astro.scale = 0.3




  rock1G = new Group
  plG = new Group
}

function draw() {
  if (gameState === PLAY) {
    background(0)


    if (keyDown("left_arrow")) {
      astro.x = astro.x - 4

    }
    if (keyDown("right_arrow")) {
      astro.x = astro.x + 4

    }

    createRock1();
    createPl();

    distance = distance + Math.round(getFrameRate() / 50);
    star.velocityY = (2 * distance / 200);

    if (star.y > 400) {
      star.y = height / 2;
    }
  }
  if (rock1.isTouching(astro)) {
    astro.destroy()
    gameState === END

    rock1G.destroyEach()
   rock1G.Velocity=0
   
    

  }




  drawSprites()

  textSize(20);
  fill("pink");
  text("Distance: " + distance, 10, 30);


}

function createRock1() {
  if (World.frameCount % 220 == 1) {
    rock1 = createSprite(Math.round(random(10, 250), 40, 10, 10));
    rock1.scale = 0.4;
    rock1.velocityY = 3
    rock1.addImage("rock1", rockImg1);
    rock1.lifetime = 170;

  }
}
function createPl() {
  if (World.frameCount % 320 == 2) {
    pl = createSprite(Math.round(random(50, 350), 40, 10, 10));
    pl.scale = 0.5;
    pl.velocityY = 3
    pl.addImage("pl", plImg);
    pl.lifetime = 170;
  }
}


