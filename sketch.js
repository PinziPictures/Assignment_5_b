var fft;
var mas=0;
var txt=40;
var aux=0;
var testa;
var occhio;
var mandibola;
var fumetto;

var lastX=0,lastY=0;

function preload() {
 mySound = loadSound('./Assets/Walking.mp3');
 
 testa = loadImage("./Assets/testa.jpg");
 testaMask = loadImage("./Assets/testa.png");
 
 occhio = loadImage("./Assets/occhio.jpg");
 occhioMask = loadImage("./Assets/occhio.png");
 
 mandibola = loadImage("./Assets/mandibola.jpg");
 mandibolaMask = loadImage("./Assets/mandibola.png");
 
 fumetto = loadImage("./Assets/bal.jpg");
 fumettoMask = loadImage("./Assets/bal.png");
}

function setup() {
  angleMode(DEGREES);
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound);
  createCanvas(windowWidth,windowHeight);
  
  occhio.mask(occhioMask);
  testa.mask(testaMask);
  mandibola.mask(mandibolaMask);
  fumetto.mask(fumettoMask);
}


function draw(){
  background(255,255,255);
  push();
  //image(occhio, height/1.1393*0.66, height*0.26, height/1.1393*0.1, height*0.1);
  //translate(windowWidth/5,0);
  if(mouseX<width && mouseY<height){
    image(occhio, map(mouseX, 0, width, height/1.1393*0.6, height/1.1393*0.75), map(mouseY, 0, height, height*0.2, height*0.3), height/1.1393*0.1, height*0.1);
    lastX=mouseX;
    lastY=mouseY;
  }else{
    image(occhio, map(lastX, 0, width, height/1.1393*0.6, height/1.1393*0.75), map(lastY, 0, height, height*0.2, height*0.3), height/1.1393*0.1, height*0.1);
  }
  image(testa, 0, 0, height/1.1393, height);
  if (mySound.isPlaying() == false) {
    image(mandibola, height/1.1393*0.42, height*0.53, height/1.1393*0.51, height*0.356);
    image(fumetto, height-(height/1.591*0.33), 0, height/1.591*0.33, height*0.33);
  }
  
  if (mySound.isPlaying() == true) {
        
        var volume = analyzer.getLevel();
        if(volume*1000>150){
        }
        
        fill(255,200,0);
        strokeWeight(0);
        triangle(height/1.1393*0.9, height*0.70, 
        (height/1.1393*0.9)+map((volume*500),0,300,0,height/1.1393*1.5), height*0.70+(map((volume*500),0,500,0,height/1.1393*1.1)),  
        (height/1.1393*0.9)+map((volume*500),0,300,0,height/1.1393*1.5), height*0.70-(map((volume*500),0,500,0,height/1.1393*1.1)));
        
        //text("song level: "+volume*500, 20,20);
        translate(height/1.1393*0.42,height*0.50+map((volume*500),0,300,0,height/3));
        //image(mandibola, height/1.1393*0.42, height*0.50+(volume*500), height/1.1393*0.51, height*0.356);
        image(mandibola, 0, 0, height/1.1393*0.51, height*0.356);
  }
  pop();
}



function mousePressed() {
  if(mySound.isPlaying()==false)
    mySound.play();
  else
    mySound.stop();
}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}


