var old_raindrop_y;
var old_raindrop_x=[];
var raindrop_y=-5;
var raindrop_x=[];
var rian_y;
var mic;
var handdraw=0;
var gao;





function preload(){
  sound = loadSound('audio/Echoes of Nature - Wilderness Rainshower.mp3');
 
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  sound.amp(1);
  sound.loop();
  fft = new p5.FFT(0.99,16);
  noFill();
  strokeJoin(ROUND);
  strokeCap(ROUND);
  stroke(0,0,0,255);
  gao=random(0,windowHeight);
}


function draw() {

    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol);


    if(frameCount==1||raindrop_y>gao){
      rian_y = random(0,windowWidth);
      raindrop_y = -5;
      gao=random(0,windowHeight);
    }



    for(j=0;j<=waveform.length;j++){
      old_raindrop_y = raindrop_y;
      old_raindrop_x[j] = raindrop_x[j];

    }



    raindrop_y+=1; 
    for(i=0;i<=waveform.length;i++){
      handdraw+=random(-0.1,0.1);
      raindrop_x[i] = rian_y+handdraw+random(-6,6);                 
      line(old_raindrop_x[i],old_raindrop_y,raindrop_x[i],raindrop_y); 
    }





}





