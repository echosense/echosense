var old_cursor_x;
var old_cursor_y=[];
var cursor_x;
var cursor_y=[];
var gao;
var mic;
var handdraw=0;
var window_Height;
var window_Width;


function preload(){
  sound = loadSound('audio/Echoes of Nature - Pebble Beach.mp3');
 
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

  gao = window_Height/2;
  frameRate(60);
  cursor_x=window_Width/2-482;
  sound.amp(1);
  sound.loop();
  fft = new p5.FFT(0.99,16);
  noFill();
  strokeJoin(ROUND);
  strokeCap(ROUND);
  stroke(0,0,0,50);
}


function draw() {

    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol*4);

    if(cursor_x<(window_Width/2+479)&&gao<(window_Height/2+268)){
      for(j=0;j<=waveform.length;j++){
        old_cursor_x = cursor_x;
        old_cursor_y[j] = cursor_y[j];

      }



      cursor_x+=1; 
      for(i=0;i<=waveform.length;i++){
        handdraw+=random(-0.08,0.08);
        if(vol<=0.06){
          cursor_y[i] = gao+handdraw+random(-6,6);
        }  
        if(vol>0.06){
          cursor_y[i] = gao+handdraw+random(-vol*100,6);
        }                          
        line(old_cursor_x,old_cursor_y[i],cursor_x,cursor_y[i]); 
      }
    }

    if(cursor_x>(window_Width/2+478)){
      cursor_x=window_Width/2-482;
      gao+=10;
    }


}





