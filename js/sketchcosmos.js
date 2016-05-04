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
var c=0;
var d=0;
var z=1/50;
var y=1/40;

var window_Height;
var window_Width;




function preload(){
  sound = loadSound('audio/theme of universe.mp3');
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

}


function draw() {
    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol/3);


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
    if(r<80){
      a+=random(-0.0008,0.0008);
      b+=random(-0.0008,0.0008);


      for(i=0;i<=waveform.length;i++){
        stroke(0,0,0,120);
        handdraw+=random(-0.08,0.08);

          cursor_x[i] = b*(r+random(-5-r/50,5+r/50)+handdraw)*cos(angle)+window_Width/2;
          cursor_y[i] = a*(r+random(-5-r/50,5+r/50)+handdraw)*sin(angle)+window_Height/2;  
          line(old_cursor_x[i],old_cursor_y[i],cursor_x[i],cursor_y[i]);  


      }
    r+=z;
    z-=1/600000;  
    }
    if(r>80){

      if(c==0){
        a+=0.0008;
      }
      if(a>=1.4){
        c=1;
      }
      if(c==1){
        a=1.4;
      }
      if(d==0){
        b-=0.001;
      }
      if(b<=0.25){
        d=1;
      }
      if(d==1){
        b=0.25;
      }

      for(i=0;i<=waveform.length;i++){
        stroke(0,0,0,80);
        handdraw+=random(-0.16,0.16);

          cursor_x[i] = a*(r+random(-8-r/50,8+r/50)+handdraw)*cos(angle)+window_Width/2;
          cursor_y[i] = b*(r+random(-8-r/50,8+r/50)+handdraw)*sin(angle)+window_Height/2;  
          line(old_cursor_x[i],old_cursor_y[i],cursor_x[i],cursor_y[i]);  


      }
    r+=y;
    y-=1/600000;   
    }


    angle+=1.5/r;

    
    


}


