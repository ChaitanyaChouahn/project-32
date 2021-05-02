const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
getBackgroundImg();
}

function draw(){
    if(backgroundImg ){
        background(backgroundImg);
        }
        else{
            background (0);
        }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
  
    var response  = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    var responseJSON = await response.json()
    console.log(responseJSON);  
    
    //change the data in JSON format
    var date = responseJSON.datetime
    console.log(date);
    

    // write code slice the datetime
    var time = date.slice(11,13);
    console.log(time)

    // add conditions to change the background images from sunrise to sunset
    if(time>=3 && time<4){
        bg = "sunrise1.png"
    
    }
    else if(time>4 && time<5) {
        bg = "sunrise2.png"
    }
    else if(time>5 && time<7) {
        bg = "sunrise3.png"
    }
    else if(time>7 && time<9) {
        bg = "sunrise4.png"
    }
    else if(time>9 && time<14) {
        bg = "sunrise5.png"
    }
    else if(time>14 && time<18) {
        bg = "sunrise6.png"
    }
    else if(time>18 && time<19) {
        bg = "sunset7.png"
    }
    else if(time>19 && time<20) {
        bg = "sunset9.png"
    }
    else if(time>20 && time<22) {
        bg = "sunset10.png"
    }
    else if(time>22 && time<3) {
        bg = "sunset11.png"
    }
    
    backgroundImg = loadImage(bg)

    //load the image in backgroundImg variable here

}
