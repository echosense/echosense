var e_old_cursor_x;
var e_old_cursor_y=[];
var e_cursor_x=0;
var e_cursor_y=[];
var e_loction=0;
var e_old_cursor_x2;
var e_old_cursor_y2=[];
var e_cursor_x2=0;
var e_cursor_y2=[];
var e_loction2=0;
var c_old_cursor_x=[];
var c_old_cursor_y=[];
var c_cursor_x=[];
var c_cursor_y=[];
var c_angle=-Math.PI/2;
var c_r=74;
var h_old_cursor_x;
var h_old_cursor_y=[];
var h_cursor_x=0;
var h_cursor_y=[];
var h_loction=0;
var h_old_cursor_x2;
var h_old_cursor_y2=[];
var h_cursor_x2=0;
var h_cursor_y2=[];
var h_loction2=0;
var h_old_cursor_x3;
var h_old_cursor_y3=[];
var h_cursor_x3=0;
var h_cursor_y3=[];
var h_loction3=0;
var o_old_cursor_x=[];
var o_old_cursor_y=[];
var o_cursor_x=[];
var o_cursor_y=[];
var o_angle;
var o_r=64;
var s_old_cursor_x=[];
var s_old_cursor_y=[];
var s_cursor_x=[];
var s_cursor_y=[];
var s_angle=-Math.PI/2;
var s_r=60;
var s_old_cursor_x2=[];
var s_old_cursor_y2=[];
var s_cursor_x2=[];
var s_cursor_y2=[];
var s_angle2=-Math.PI/4;
var s_loctionx;
var s_loctiony;
var e2_old_cursor_x;
var e2_old_cursor_y=[];
var e2_cursor_x=0;
var e2_cursor_y=[];
var e2_loction=0;
var e2_old_cursor_x2;
var e2_old_cursor_y2=[];
var e2_cursor_x2=0;
var e2_cursor_y2=[];
var e2_loction2=0;
var n_old_cursor_x;
var n_old_cursor_y=[];
var n_cursor_x=0;
var n_cursor_y=[];
var n_loction=0;
var n_old_cursor_x2=[];
var n_old_cursor_y2=[];
var n_cursor_x2=[];
var n_cursor_y2=[];
var n_loction2=0;
var n_old_cursor_x3;
var n_old_cursor_y3=[];
var n_cursor_x3=0;
var n_cursor_y3=[];
var n_loction3=0;
var s2_old_cursor_x=[];
var s2_old_cursor_y=[];
var s2_cursor_x=[];
var s2_cursor_y=[];
var s2_angle=-Math.PI/2;
var s2_r=60;
var s2_old_cursor_x2=[];
var s2_old_cursor_y2=[];
var s2_cursor_x2=[];
var s2_cursor_y2=[];
var s2_angle2=-Math.PI/4;
var s2_loctionx;
var s2_loctiony;
var e3_old_cursor_x;
var e3_old_cursor_y=[];
var e3_cursor_x=0;
var e3_cursor_y=[];
var e3_loction=0;
var e3_old_cursor_x2;
var e3_old_cursor_y2=[];
var e3_cursor_x2=0;
var e3_cursor_y2=[];
var e3_loction2=0;
var wide = 1;


var handdraw=0;
var handdraw2=0;
var handdraw3=0;
var handdraw4=0;
var handdraw6=0;
var handdraw7=0;
var handdraw9=0;


var old_raindrop_y;
var old_raindrop_x=[];
var raindrop_y=-5;
var raindrop_x=[];
var rain_x;
var handdraw=0;
var rain_y;
var count=1;
var count_x=[];
var count_y=[];
var bg;

var window_Height;
var window_Width;







function preload(){
  sound = loadSound('audio/theme of universe.mp3');
  //bg = loadImage("bg1.png");

}

function setup(){

  createCanvas(windowWidth, windowHeight);
  //document.getElementsByTagName("body")[0].setAttribute("style","background-image: url(IMG_9129-.jpg)");
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
  e_cursor_x=window_Height/4;
  e_cursor_x2=window_Width/2-430;
  e_loction2 = window_Height/4+8;
  e_loction = window_Width/2-424; 
  h_cursor_x=window_Height/4;
  h_cursor_x2=window_Width/2-242;
  h_cursor_x3=window_Height/4;  
  h_loction2 = window_Height/4+128;
  h_loction = window_Width/2-250; 
  h_loction3 = window_Width/2-162; 
  s_loctionx = 60*cos(-5*Math.PI/4)+window_Width/2+84;
  s_loctiony = 60*sin(-5*Math.PI/4)+window_Height/4+60+8;  
  e2_cursor_x=window_Height/4;
  e2_cursor_x2=window_Width/2+100;
  e2_loction2 = window_Height/4+8;
  e2_loction = window_Width/2+108; 
  n_cursor_x=window_Height/4;
  n_loction2x=window_Width/2+194;
  n_cursor_x3=window_Height/4;  
  n_loction2y = window_Height/4+8;
  n_loction = window_Width/2+192; 
  n_loction3 = window_Width/2+272;
  s2_loctionx = 60*cos(-5*Math.PI/4)+window_Width/2+356;
  s2_loctiony = 60*sin(-5*Math.PI/4)+window_Height/4+60+8;  
  e3_cursor_x=window_Height/4;
  e3_cursor_x2=window_Width/2+368;
  e3_loction2 = window_Height/4+8;
  e3_loction = window_Width/2+376; 
  o_angle=random(0,2*Math.PI);   
  stroke(255,255,255,180);


  rain_y=random(0,window_Height);
  raindrop_y = rain_y;
  //background(bg);


     
}


function draw() {

    var waveform = fft.waveform();
    var vol = sound.getLevel();

    //console.log(vol*2);
    strokeWeight(vol*14);
    //if(vol>=0.02){

      for(j=0;j<=waveform.length;j++){
        e_old_cursor_x = e_cursor_x;
        e_old_cursor_y[j] = e_cursor_y[j];
        e_old_cursor_x2 = e_cursor_x2;
        e_old_cursor_y2[j] = e_cursor_y2[j];
        c_old_cursor_x[j] = c_cursor_x[j];
        c_old_cursor_y[j] = c_cursor_y[j];  
        h_old_cursor_x = h_cursor_x;
        h_old_cursor_y[j] = h_cursor_y[j];
        h_old_cursor_x2 = h_cursor_x2;
        h_old_cursor_y2[j] = h_cursor_y2[j]; 
        h_old_cursor_x3 = h_cursor_x3;
        h_old_cursor_y3[j] = h_cursor_y3[j]; 
        o_old_cursor_x[j] = o_cursor_x[j];
        o_old_cursor_y[j] = o_cursor_y[j]; 
        s_old_cursor_x[j] = s_cursor_x[j];
        s_old_cursor_y[j] = s_cursor_y[j];                                       
        s_old_cursor_x2[j] = s_cursor_x2[j];
        s_old_cursor_y2[j] = s_cursor_y2[j];
        e2_old_cursor_x = e2_cursor_x;
        e2_old_cursor_y[j] = e2_cursor_y[j];
        e2_old_cursor_x2 = e2_cursor_x2;
        e2_old_cursor_y2[j] = e2_cursor_y2[j];  
        n_old_cursor_x = n_cursor_x;
        n_old_cursor_y[j] = n_cursor_y[j];
        n_old_cursor_x2[j] = n_cursor_x2[j];
        n_old_cursor_y2[j] = n_cursor_y2[j]; 
        n_old_cursor_x3 = n_cursor_x3;
        n_old_cursor_y3[j] = n_cursor_y3[j]; 
        s2_old_cursor_x[j] = s2_cursor_x[j];
        s2_old_cursor_y[j] = s2_cursor_y[j];                                       
        s2_old_cursor_x2[j] = s2_cursor_x2[j];
        s2_old_cursor_y2[j] = s2_cursor_y2[j];
        e3_old_cursor_x = e3_cursor_x;
        e3_old_cursor_y[j] = e3_cursor_y[j];
        e3_old_cursor_x2 = e3_cursor_x2;
        e3_old_cursor_y2[j] = e3_cursor_y2[j]; 

      }
          
      //E
      e_cursor_x+=1; 
      //console.log(e_cursor_x);
      if(e_cursor_x<=window_Height/4+240+16){
        for(i=0;i<=waveform.length;i++){
          handdraw+=random(-0.05,0.05);
          e_cursor_y[i] = e_loction+handdraw+random(-8,8);                 
          line(e_old_cursor_y[i],e_old_cursor_x,e_cursor_y[i],e_cursor_x); 
        }
      }
      if(e_cursor_x>window_Height/4+240+16){
        e_cursor_x2+=1;
        if(e_cursor_x2>=window_Width/2-354){
          e_cursor_x2 = window_Width/2-420;
          e_loction2 +=120; 
        }
        if(e_loction2<=window_Height/4+8+240){
          for(i=0;i<=waveform.length;i++){
            handdraw+=random(-0.05,0.05);
            e_cursor_y2[i] = e_loction2+handdraw+random(-8,8);
            if(e_cursor_y2[i]-e_old_cursor_y2[i]<100){                 
              line(e_old_cursor_x2,e_old_cursor_y2[i],e_cursor_x2,e_cursor_y2[i]);
            } 
          } 
        }

      }

      //C
      if(c_angle>=-3*Math.PI/2){
        for(i=0;i<=waveform.length;i++){
          handdraw2+=random(-0.05,0.05);
          c_cursor_x[i] = (c_r+random(-8,8)+handdraw2)*cos(c_angle)+window_Width/2-268;
          c_cursor_y[i] = 1.6*(c_r+random(-6,6)+handdraw2)*sin(c_angle)+window_Height/4+120+8;  
          line(c_old_cursor_x[i],c_old_cursor_y[i],c_cursor_x[i],c_cursor_y[i]);       

        }
        c_angle-=Math.PI/270;
      }  

      //H
      h_cursor_x+=1; 
      //console.log(h_cursor_x);
      if(h_cursor_x<=window_Height/4+240+16){
        for(i=0;i<=waveform.length;i++){
          handdraw3+=random(-0.05,0.05);
          h_cursor_y[i] = h_loction+handdraw3+random(-8,8);                 
          line(h_old_cursor_y[i],h_old_cursor_x,h_cursor_y[i],h_cursor_x); 
        }
      }
      if(h_cursor_x>window_Height/4+240+16){
        h_cursor_x2+=1;
        if(h_cursor_x2<=window_Width/2-160){
          for(i=0;i<=waveform.length;i++){
            handdraw3+=random(-0.05,0.05);
            h_cursor_y2[i] = h_loction2+handdraw3+random(-8,8);
            if(h_cursor_y2[i]-h_old_cursor_y2[i]<100){                 
              line(h_old_cursor_x2,h_old_cursor_y2[i],h_cursor_x2,h_cursor_y2[i]);
            } 
          } 
        }

      }
      if(h_cursor_x2>window_Width/2-160&&h_cursor_x3<=window_Height/4+240+16){
        h_cursor_x3+=1;
        for(i=0;i<=waveform.length;i++){
          handdraw3+=random(-0.05,0.05);
          h_cursor_y3[i] = h_loction3+handdraw3+random(-8,8);                 
          line(h_old_cursor_y3[i],h_old_cursor_x3,h_cursor_y3[i],h_cursor_x3); 
        }
      }


      //O
      
      //push();
      //stroke(4,52,3);
      
      if(n_cursor_x3<=window_Height/4+240){
        for(i=0;i<=waveform.length;i++){
          handdraw4+=random(-0.05,0.05);
          o_cursor_x[i] = (o_r+random(-8,8)*wide+handdraw4)*cos(o_angle)+window_Width/2-74;
          o_cursor_y[i] = (o_r+random(-8,8)*wide+handdraw4)*sin(o_angle)+window_Height/4+120+8;  
          line(o_old_cursor_x[i],o_old_cursor_y[i],o_cursor_x[i],o_cursor_y[i]);       

        }
        o_angle-=Math.PI/120;


        o_r-=2/22;
        wide-=1/3000;

      }

      //pop();
       


      //S
      s_angle-=Math.PI/180;       
      if(s_angle>=-5*Math.PI/4){
        for(i=0;i<=waveform.length;i++){
          //handdraw5+=random(-0.05,0.05);
          s_cursor_x[i] = (s_r+random(-8,8))*cos(s_angle)+window_Width/2+84;
          s_cursor_y[i] = (s_r+random(-8,8))*sin(s_angle)+window_Height/4+60+8;  
          line(s_old_cursor_x[i],s_old_cursor_y[i],s_cursor_x[i],s_cursor_y[i]);       

        }        
      }

      if(s_angle<-5*Math.PI/4){

        s_loctionx+=0.7;
        s_loctiony+=0.9;
        if(s_loctionx<=60*cos(-Math.PI/4)+window_Width/2+24){
          for(i=0;i<=waveform.length;i++){
            //handdraw5+=random(-0.05,0.05);
            s_cursor_x2[i] = s_loctionx+random(-6,6);  
            s_cursor_y2[i] = s_loctiony+random(-6,6);                 
            line(s_old_cursor_x2[i],s_old_cursor_y2[i],s_cursor_x2[i],s_cursor_y2[i]); 
          }
        }  
      } 

      if(s_loctionx>60*cos(-Math.PI/4)+window_Width/2+24){ 
        s_angle2+=Math.PI/180; 
        if(s_angle2<=Math.PI/2){
          for(i=0;i<=waveform.length;i++){
            //handdraw5+=random(-0.05,0.05);
            s_cursor_x2[i] = (s_r+random(-8,8))*cos(s_angle2)+window_Width/2+24;
            s_cursor_y2[i] = (s_r+random(-8,8))*sin(s_angle2)+window_Height/4+180+8;  
            line(s_old_cursor_x2[i],s_old_cursor_y2[i],s_cursor_x2[i],s_cursor_y2[i]);       

          }
        }  
      }

      //E2
      e2_cursor_x+=1; 
      //console.log(e_cursor_x);
      if(e2_cursor_x<=window_Height/4+240+16){
        for(i=0;i<=waveform.length;i++){
          handdraw6+=random(-0.05,0.05);
          e2_cursor_y[i] = e2_loction+handdraw6+random(-8,8);                 
          line(e2_old_cursor_y[i],e2_old_cursor_x,e2_cursor_y[i],e2_cursor_x); 
        }
      }
      if(e2_cursor_x>window_Height/4+240+16){
        e2_cursor_x2+=1;
        if(e2_cursor_x2>=window_Width/2+174){
          e2_cursor_x2 = window_Width/2+108;
          e2_loction2 +=120; 
        }
        if(e2_loction2<=window_Height/4+8+240){
          for(i=0;i<=waveform.length;i++){
            handdraw6+=random(-0.05,0.05);
            e2_cursor_y2[i] = e2_loction2+handdraw6+random(-8,8);
            if(e2_cursor_y2[i]-e2_old_cursor_y2[i]<100){                 
              line(e2_old_cursor_x2,e2_old_cursor_y2[i],e2_cursor_x2,e2_cursor_y2[i]);
            } 
          } 
        }

      }    


      //N
      n_cursor_x+=1; 
      //console.log(h_cursor_x);
      if(n_cursor_x<=window_Height/4+240+16){
        for(i=0;i<=waveform.length;i++){
          handdraw7+=random(-0.05,0.05);
          n_cursor_y[i] = n_loction+handdraw7+random(-8,8);                 
          line(n_old_cursor_y[i],n_old_cursor_x,n_cursor_y[i],n_cursor_x); 
        }
      }
      if(n_cursor_x>window_Height/4+240+16){
        n_loction2x+=1/2;
        n_loction2y+=13/8;
        if(n_loction2x<=window_Width/2+268){
          for(i=0;i<=waveform.length;i++){
            handdraw7+=random(-0.05,0.05);
            n_cursor_x2[i] = n_loction2x+handdraw7+random(-8,8);            
            n_cursor_y2[i] = n_loction2y+handdraw7+random(-8,8);
            if(n_cursor_y2[i]-n_old_cursor_y2[i]<100){                 
              line(n_old_cursor_x2[i],n_old_cursor_y2[i],n_cursor_x2[i],n_cursor_y2[i]);
            } 
          } 
        }

      }
      if(n_loction2x>window_Width/2+272&&n_cursor_x3<=window_Height/4+240+16){
        n_cursor_x3+=1;
        for(i=0;i<=waveform.length;i++){
          handdraw7+=random(-0.05,0.05);
          n_cursor_y3[i] = n_loction3+handdraw7+random(-8,8);                 
          line(n_old_cursor_y3[i],n_old_cursor_x3,n_cursor_y3[i],n_cursor_x3); 
        }
      }


      //S2
      s2_angle-=Math.PI/180;       
      if(s2_angle>=-5*Math.PI/4){
        for(i=0;i<=waveform.length;i++){
          //handdraw5+=random(-0.05,0.05);
          s2_cursor_x[i] = (s2_r+random(-8,8))*cos(s2_angle)+window_Width/2+356;
          s2_cursor_y[i] = (s2_r+random(-8,8))*sin(s2_angle)+window_Height/4+60+8;  
          line(s2_old_cursor_x[i],s2_old_cursor_y[i],s2_cursor_x[i],s2_cursor_y[i]);       

        }        
      }

      if(s2_angle<-5*Math.PI/4){

        s2_loctionx+=0.7;
        s2_loctiony+=0.9;
        if(s2_loctionx<=60*cos(-Math.PI/4)+window_Width/2+300){
          for(i=0;i<=waveform.length;i++){
            //handdraw5+=random(-0.05,0.05);
            s2_cursor_x2[i] = s2_loctionx+random(-6,6);  
            s2_cursor_y2[i] = s2_loctiony+random(-6,6);                 
            line(s2_old_cursor_x2[i],s2_old_cursor_y2[i],s2_cursor_x2[i],s2_cursor_y2[i]); 
          }
        }  
      } 

      if(s2_loctionx>60*cos(-Math.PI/4)+window_Width/2+296){ 
        s2_angle2+=Math.PI/180; 
        if(s2_angle2<=Math.PI/2){
          for(i=0;i<=waveform.length;i++){
            //handdraw5+=random(-0.05,0.05);
            s2_cursor_x2[i] = (s2_r+random(-8,8))*cos(s2_angle2)+window_Width/2+296;
            s2_cursor_y2[i] = (s2_r+random(-8,8))*sin(s2_angle2)+window_Height/4+180+8;  
            line(s2_old_cursor_x2[i],s2_old_cursor_y2[i],s2_cursor_x2[i],s2_cursor_y2[i]);       

          }
        }  
      }

      //E3
      e3_cursor_x+=1; 
      //console.log(e_cursor_x);
      if(e3_cursor_x<=window_Height/4+240+16){
        for(i=0;i<=waveform.length;i++){
          handdraw9+=random(-0.05,0.05);
          e3_cursor_y[i] = e3_loction+handdraw9+random(-8,8);                 
          line(e3_old_cursor_y[i],e3_old_cursor_x,e3_cursor_y[i],e3_cursor_x); 
        }
      }
      if(e3_cursor_x>window_Height/4+240+16){
        e3_cursor_x2+=1;
        if(e3_cursor_x2>=window_Width/2+448){
          e3_cursor_x2 = window_Width/2+376;
          e3_loction2 +=120; 
        }
        if(e3_loction2<=window_Height/4+8+240){
          for(i=0;i<=waveform.length;i++){
            handdraw9+=random(-0.05,0.05);
            e3_cursor_y2[i] = e3_loction2+handdraw9+random(-8,8);
            if(e3_cursor_y2[i]-e3_old_cursor_y2[i]<100){                 
              line(e3_old_cursor_x2,e3_old_cursor_y2[i],e3_cursor_x2,e3_cursor_y2[i]);
            } 
          } 
        }

      } 

      //if (n_cursor_x3==window_Height/4+240+16) {
      //  saveCanvas('myCanvas', 'png');
      //} 
/*
      //rain
      if(n_cursor_x3>=window_Height/4+240){
        strokeWeight(vol);
        if(frameCount==1||raindrop_y>rain_y){
          rain_x = random(0,window_Width);
          rain_y = random(0,window_Height);
          while(rain_x>window_Width/5&&rain_x<4*window_Width/5&&rain_y>window_Height/5&&rain_y<3*window_Height/4){
            rain_x = random(0,window_Width);
            rain_y = random(0,window_Height);        
          }
          raindrop_y = rain_y-random(10,20);
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
          raindrop_x[i] = rain_x+handdraw+random(-6,6);   
          stroke(0,0,0,255);            
          line(old_raindrop_x[i],old_raindrop_y,raindrop_x[i],raindrop_y); 
        } 
      } 
*/
}




