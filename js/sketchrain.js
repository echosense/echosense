var old_raindrop_y;
var old_raindrop_x=[];
var raindrop_y=-5;
var raindrop_x=[];
var rain_x;
var mic;
var handdraw=0;
var rain_y;
var count=1;
var count_x=[];
var count_y=[];




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
  rain_y=random(0,windowHeight);
  raindrop_y = rain_y;
  //rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);
}


function draw() {

    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol);


    if(frameCount==1||raindrop_y>rain_y){
      rain_x = random(0,windowWidth);
      rain_y = random(0,windowHeight);
      while(rain_x>windowWidth/4&&rain_x<3*windowWidth/4&&rain_y>windowHeight/4&&rain_y<3*windowHeight/4){
        rain_x = random(0,windowWidth);
        rain_y = random(0,windowHeight);        
      }
      raindrop_y = rain_y-random(5,30);
      raindrop_x=[];
      count_x[count] = rain_x;
      count_y[count] = raindrop_y;
      count++;
    }

    if(count>20){
      noStroke();
      fill(255,255,255,60);
      rect(count_x[count-21]-40,count_y[count-21]-30,80,80);
    }



    for(j=0;j<=waveform.length;j++){
      old_raindrop_y = raindrop_y;
      old_raindrop_x[j] = raindrop_x[j];

    }



    raindrop_y+=1; 
    for(i=0;i<=waveform.length;i++){
      handdraw+=random(-0.1,0.1);
      raindrop_x[i] = rain_x+handdraw+random(-5,5);   
      stroke(0,0,0,255);            
      line(old_raindrop_x[i],old_raindrop_y,raindrop_x[i],raindrop_y); 
    }





}





