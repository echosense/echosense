var old_cursor_x=[];
var old_cursor_y=[];
var cursor_x=[];
var cursor_y=[];
var angle=0;
var w=3.14/180;
var r=5;
var mic;
var handdraw=0;
var a=1;
var b=1;
var z=1/40;

var window_Height;
var window_Width;




function preload(){
  sound = loadSound('audio/Echoes of Nature - Deep Woods.mp3');
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
  stroke(0,0,0,180);
}


function draw() {
    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol*3);


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

    a+=random(-0.0008,0.0008);
    b+=random(-0.0008,0.0008);


    for(i=0;i<=waveform.length;i++){
      handdraw+=random(-0.16,0.16);

        cursor_x[i] = b*(r+random(-5-r/50,5+r/50)+handdraw)*cos(angle)+window_Width/2;
        cursor_y[i] = a*(r+random(-5-r/50,5+r/50)+handdraw)*sin(angle)+window_Height/2;  
        line(old_cursor_x[i],old_cursor_y[i],cursor_x[i],cursor_y[i]);  


    }
    r+=z;
    z-=1/600000;

    angle+=1.8/r;

    
    


}


