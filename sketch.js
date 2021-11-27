//Create variables here
var Dog,happyDog;
var DogImg1,DogImg2;
var database;
var foodS,foodStock;



function preload()
{
	//load images here
 DogImg1 =  loadImage("Dog.png")
 DogImg2 =  loadImage("happydog.png")
}

function setup() {
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
	createCanvas(500, 500);
  Dog = createSprite(250,250,15,15);
  Dog.addImage("normal dog",DogImg1)
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  Dog.addImage("happy dog",DogImg2);
}
text("Food Remaining:" + foodS,50,100);
text("Note: Press Up Arrow to feed Milk", 50,130);
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.vel();
}

function writeStock(x)
{
  if(x <= 0){
    x = 0
  }
  else
  {
    x = x-1
  }
  database.ref('/').update({
    Food:x
 })
}


