var old_cursor_x=[];
var old_cursor_y=[];
var cursor_x=[];
var cursor_y=[];
var angle=0;
var w=3.14/180;
var r=0;
var mic;
var handdraw=0;
var a=0.5;
var b=3;
var c=0;
var d=0;
var z=1/65;
var window_Height;
var window_Width;


function preload(){
  sound = loadSound('theme of universe.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  window_Width=windowWidth;
  window_Height=windowHeight;
  var top = window_Height/2*(-1);
  var left = window_Width/2*(-1);
  var homeCanvas=select('#defaultCanvas');
  homeCanvas.style("margin-top", top);
  homeCanvas.style("margin-left", left);
  frameRate(60);
  sound.amp(1);
  sound.loop();
  fft = new p5.FFT(0.99,16);
  noFill();
  strokeJoin(ROUND);
  strokeCap(ROUND);
  stroke(0,0,0,120);
}


function draw() {
    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol/1.5);


//    console.log(vol);
    for(j=0;j<=waveform.length;j++){
      old_cursor_x[j] = cursor_x[j];
      old_cursor_y[j] = cursor_y[j];
      //old_cursor_x1[j] = cursor_x1[j];
      //old_cursor_y1[j] = cursor_y1[j];
    }
/*  
没有声音干扰时  
    cursor_x = r*cos(angle);
    cursor_y = r*sin(angle);
*/  
    a+=random(-0.008,0.008);
    b+=random(-0.008,0.008);



    for(i=0;i<=waveform.length;i++){

        cursor_x[i] = b*(r+random(-5,5))*cos(angle)+window_Width/2;
        cursor_y[i] = a*(r+random(-5,5))*sin(angle)+window_Height/2;  
        line(old_cursor_x[i],old_cursor_y[i],cursor_x[i],cursor_y[i]);  


    }
      r+=1/60;

    angle+=1.8/r;

    
    


}

/*
    if(c==0){
      a+=0.008;
    }
    
    if(a>=1.5){
      c=1;
    }
    if(c==1){
      a-=0.008;
    }
    if(a<=0.5){
      c=0;
    }  

    if(d==0){
      b-=0.008;
    }
    
    if(b<=0.5){
      d=1;
    }
    if(d==1){
      b+=0.008;
    }
    if(b>=1.5){
      d=0;
    } 
    */