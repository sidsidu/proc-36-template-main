var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feedtime;
//create feed and lastFed variable here
var feedDog1

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feedDog1 = createButton("Feed")
  feedDog1.position(700,95)
  feedDog1.mousePressed(feedDog)
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  //if(lastFed>=12){
  //  text("last Feed: 12 PM",350,30)
  //}else if(lastfeed ==0){
   //   text("last Feed: 12 AM",350,30)
  //}else{
  //  text("last Feed: 12 AM",350,30)
 // }

 
  //write code to display text lastFed time here\
  
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time
  foodS = foodS-1
  //last = last+1
  database.ref('/').update({
    Food:foodS,
    //feedTime:last
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
