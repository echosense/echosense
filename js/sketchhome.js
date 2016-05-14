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
var uitop=30;


var handdraw=0;
var handdraw2=0;
var handdraw3=0;
var handdraw4=0;
var handdraw6=0;
var handdraw7=0;
var handdraw9=0;


var homeCanvas;
var homeCanvas_click;
var homeCanvas_mark=0;
var window_Height;
var window_Width;

var uiOpacity = 0;
var uiHome;
var uiLeft;
var uiRight;
var uiSpacebar;
var uiButtonoutline;
var uiPretext;
var uiPosttext;
var uiSpan;
var uiIntroduction;

var canvasOpacity = 1;
var canvasOpacity_mark=0;
var spacebardown_mark=0;
var spacebardown=0;
var spacebarInner;
var spacebar_button;
var enlarge;
var shrink;
var enlarge2;
var shrink2;
var fullscreen_mark=0;
var select_icon;
var iconOpacity=0;
var speed_a=0;
var speed_b=0;
var speed_c=0;
var speed_d=0;
var speed_e=0;
var speed_f=0;
var speed_g=0;
var speed_h=0;
var speed_i=0;
var select_icon_mark=0;
var bgOpacity=0;
var canvasbg;
var bgcolor;
var selectOpacity=1;
var animatemark=0;
var animateOpacity=0;
var spanOpacity=0;
var btnbgOpacity=0;
var btntop=-9;
var introductionOpacity=0;



function preload(){
  sound = loadSound('audio/Artur Rubinstein - Nocturne No. 1, Op. 32 in B.mp3');
  //bg = loadImage("bg1.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);
  //document.getElementsByTagName("body")[0].setAttribute("style","background-image: url(IMG_9129-.jpg)");

  //canvas居中
  window_Width=windowWidth;
  window_Height=windowHeight;
  var top = window_Height/2*(-1);
  var left = window_Width/2*(-1);
  homeCanvas_click=document.getElementById('wrapper-elementframe');
  homeCanvas_click.onclick = function(){
    homeCanvas_mark=1;
  }
  homeCanvas=select('#defaultCanvas');
  homeCanvas.style("margin-top", top);
  homeCanvas.style("margin-left", left);
  //canvas居中


  //全屏
  enlarge = document.getElementById('fullscreen');
  shrink = document.getElementById('windowscreen');
  enlarge2 = select('#fullscreen');
  shrink2 = select('#windowscreen');
  enlarge.onclick = function(){
    var fs = fullscreen();
    fullscreen(!fs);
    enlarge2.style("opacity", 0);
    shrink2.style("opacity", 1);
    enlarge2.style("bottom", -1000);
    shrink2.style("bottom", -16);
  };
  shrink.onclick = function(){
    var ws = fullscreen();
    fullscreen(!ws);
    enlarge2.style("opacity", 1);
    shrink2.style("opacity", 0);
    enlarge2.style("bottom", 0);
    shrink2.style("bottom", -1000);
  }; 
  //全屏 

  //spacebar
  var spacebar = document.getElementById('spacebar__button');
  spacebar_button = select('#spacebar__button');
  spacebarInner = select('#spacebar__button__inner');
  spacebar.onclick = function(){
    canvasOpacity_mark=1;
  };
  spacebar.onmousedown = function(){
    spacebardown_mark=1;
  };
  spacebar.onmouseup = function(){
    spacebardown_mark=0;
  };

  //spacebar

  //渐隐声明
  uiLeft=select('#uileft');
  uiRight=select('#uiright');
  uiButtonoutline=select('#buttonoutline');
  uiPretext=select('#pretext');
  uiPosttext=select('#posttext');
  uiSpan=select('#span');
  uiHome=select('#wrapper-elementframe');
  uiSpacebar=select('#spacebar');
  uiIntroduction=select('#introduction');
  //渐隐声明

  //选择页
  select_icon=select('#select_icon')
  var select_icon_=document.getElementById('select_icon');
  select_icon_.onclick = function(){
    select_icon_mark=1;
  }
  canvasbg=select("#canvasbg");
  bgcolor=select("#bgcolor");
  //选择页



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
          if (e_old_cursor_y[i]==undefined) {e_old_cursor_y[i]=e_cursor_y[i];}
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
          if (c_old_cursor_x[i]==undefined) {c_old_cursor_x[i]=c_cursor_x[i];}  
          if (c_old_cursor_y[i]==undefined) {c_old_cursor_y[i]=c_cursor_y[i];}              
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
          if (h_old_cursor_y[i]==undefined) {h_old_cursor_y[i]=h_cursor_y[i];}                 
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
          if (h_old_cursor_y3[i]==undefined) {h_old_cursor_y3[i]=h_cursor_y3[i];}                  
                 
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
          if (o_old_cursor_x[i]==undefined) {o_old_cursor_x[i]=o_cursor_x[i];}
          if (o_old_cursor_y[i]==undefined) {o_old_cursor_y[i]=o_cursor_y[i];}             
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
          if (s_old_cursor_x[i]==undefined) {s_old_cursor_x[i]=s_cursor_x[i];}
          if (s_old_cursor_y[i]==undefined) {s_old_cursor_y[i]=s_cursor_y[i];}            
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
            if (s_old_cursor_x2[i]==undefined) {s_old_cursor_x2[i]=s_cursor_x2[i];}
            if (s_old_cursor_y2[i]==undefined) {s_old_cursor_y2[i]=s_cursor_y2[i];}                   
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
          if (e2_old_cursor_y[i]==undefined) {e2_old_cursor_y[i]=e2_cursor_y[i];}                   
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
          if (n_old_cursor_y[i]==undefined) {n_old_cursor_y[i]=n_cursor_y[i];}              
                
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
          if (n_old_cursor_y3[i]==undefined) {n_old_cursor_y3[i]=n_cursor_y3[i];}                     

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
          if (s2_old_cursor_x[i]==undefined) {s2_old_cursor_x[i]=s2_cursor_x[i];}    
          if (s2_old_cursor_y[i]==undefined) {s2_old_cursor_y[i]=s2_cursor_y[i];}                 
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
            if (s2_old_cursor_x2[i]==undefined) {s2_old_cursor_x2[i]=s2_cursor_x2[i];}    
            if (s2_old_cursor_y2[i]==undefined) {s2_old_cursor_y2[i]=s2_cursor_y2[i];}                  
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
          if (e3_old_cursor_y[i]==undefined) {e3_old_cursor_y[i]=e3_cursor_y[i];}                 
                
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

//UI渐显

      

      if (n_cursor_x3>=window_Height/4+240&&uiOpacity<=0.8&&canvasOpacity_mark==0&&homeCanvas_mark==0) {
        if (introductionOpacity<=10) {
          speed_i += 0.0003;
          introductionOpacity+=speed_i;
          uiIntroduction.style("opacity", introductionOpacity);
        }
        if(introductionOpacity>=9.9&&animateOpacity<=1){
          speed_f += 0.0003;
          animateOpacity+=speed_f;
          spacebarInner.style("opacity", animateOpacity);
        }
        if(animatemark==0&&animateOpacity>=0.4){
          spacebarInner.addClass('active');
          animatemark=1;
        }
        if(animateOpacity>=0.9&&btnbgOpacity<=1){
          speed_b += 0.001;
          spanOpacity += speed_b;
          uiSpan.style("opacity", spanOpacity);
        }
        if(spanOpacity>=0.9&&btnbgOpacity<=1){
          speed_g += 0.002;
          btnbgOpacity += speed_g;
          uiButtonoutline.style("opacity", btnbgOpacity);
          if(btntop<=0){
            btntop+=0.3;
            uiButtonoutline.style("top", (btntop+"px"));
          }          
        }
        if(btnbgOpacity>=0.9&&uiOpacity<=1){
          speed_h+=0.0003;
          uiOpacity+=speed_h;
          uiLeft.style("opacity", uiOpacity);
          uiRight.style("opacity", uiOpacity);
          uiPretext.style("opacity", uiOpacity);
          uiPosttext.style("opacity", uiOpacity);


        }
      } 

      if (uiOpacity<=0.8&&canvasOpacity_mark==0&&homeCanvas_mark==1) {
        if (introductionOpacity<=1) {
          speed_i += 0.0003;
          introductionOpacity+=speed_i;
          uiIntroduction.style("opacity", introductionOpacity);
        }
        if(introductionOpacity>=0.9&&animateOpacity<=1){
          speed_f += 0.0003;
          animateOpacity+=speed_f;
          spacebarInner.style("opacity", animateOpacity);
        }
        if(animatemark==0&&animateOpacity>=0.4){
          spacebarInner.addClass('active');
          animatemark=1;
        }
        if(animateOpacity>=0.9&&btnbgOpacity<=1){
          speed_b += 0.001;
          spanOpacity += speed_b;
          uiSpan.style("opacity", spanOpacity);
        }
        if(spanOpacity>=0.9&&btnbgOpacity<=1){
          speed_g += 0.002;
          btnbgOpacity += speed_g;
          uiButtonoutline.style("opacity", btnbgOpacity);
          if(btntop<=0){
            btntop+=0.3;
            uiButtonoutline.style("top", (btntop+"px"));
          }          
        }
        if(btnbgOpacity>=0.9&&uiOpacity<=1){
          speed_h+=0.0003;
          uiOpacity+=speed_h;
          uiLeft.style("opacity", uiOpacity);
          uiRight.style("opacity", uiOpacity);
          uiPretext.style("opacity", uiOpacity);
          uiPosttext.style("opacity", uiOpacity);


        }
      } 
//UI渐显

//点击spacebar后
      if(canvasOpacity_mark==1&&canvasOpacity>=0){
        speed_d =0.01;
        canvasOpacity-=speed_d;
        spacebar_button.style("cursor","default");
        homeCanvas.style("opacity", canvasOpacity);
        uiSpacebar.style("opacity", canvasOpacity);
        uiIntroduction.style("opacity", canvasOpacity);
      }

      if(canvasOpacity_mark==1&&canvasOpacity<0.01&&iconOpacity<=0.8){

        speed_a+=0.0001;
        iconOpacity+=speed_a;

        select_icon.style("opacity",iconOpacity);
        select_icon.style("z-index",1);
      }
//点击spacebar后


//spacebardown 动画
      if(spacebardown_mark==1&&spacebardown<=8){
        spacebardown+=1.5;
        spacebarInner.style("margin-top",spacebardown);
      }

      if(spacebardown_mark==0&&spacebardown>=0){
        spacebardown-=1.5;
        spacebarInner.style("margin-top",spacebardown);
      }
//spacebardown 动画

//点击selecticon后
      if (select_icon_mark==1&&bgOpacity<=1) {
        canvasbg.style("z-index",3);
        bgcolor.style("z-index",1);
        uiHome.style("z-index",2);
        speed_e+=0.0001;
        bgOpacity+=speed_e;
        canvasbg.style("opacity",bgOpacity);
        bgcolor.style("opacity",(bgOpacity-0.15));
      }
      var condition1 = window_Height-100;
      if(bgOpacity>=0.9&&uiOpacity>=0&&mouseY<condition1){
        uitop-=0.3;
        uiOpacity-=0.02;
        uiHome.style("top",(uitop+"px"));
        uiHome.style("bottom",(uitop+"px"));
        uiHome.style("opacity",uiOpacity);

      }

      if (bgOpacity>=0.99&&uiOpacity<=1&&mouseY>condition1) {
        uitop+=0.3;
        uiOpacity+=0.02;
        uiHome.style("bottom",(uitop+"px"));
        uiHome.style("opacity",uiOpacity);
      };
//点击selecticon后


}









//下面这部分是我从p5.js官网上面找的 解决了fullscreen的问题

p5.prototype.fullscreen = function(val) {
  // no arguments, return fullscreen or not
  if (typeof val === 'undefined') {
    return document.fullscreenElement ||
           document.webkitFullscreenElement ||
           document.mozFullScreenElement ||
           document.msFullscreenElement;
  } else { // otherwise set to fullscreen or not
    if (val) {
      launchFullscreen(document.documentElement);
    } else {
      exitFullscreen();
    }
  }
};

function launchFullscreen(element) {
  var enabled = document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled;
  if (!enabled) {
    throw new Error('Fullscreen not enabled in this browser.');
  }
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//键盘监听
document.onkeydown=function(event){ 
  var e = event || window.event || arguments.callee.caller.arguments[0]; 
  if(e && e.keyCode==32){
    event.preventDefault();

    spacebardown_mark=1;
  }

  if(e && e.keyCode==70){
    var qs = fullscreen();
    fullscreen(!qs);
    fullscreen_mark+=1;
    var fullscreen_mark_=Math.pow(-1,fullscreen_mark);
    if (fullscreen_mark_<0) {
      enlarge2.style("opacity", 0);
      shrink2.style("opacity", 1);
      enlarge2.style("bottom", -1000);
      shrink2.style("bottom", -16);
      fullscreen_mark=1;
    };
    if (fullscreen_mark_>0) {
        enlarge2.style("opacity", 1);
        shrink2.style("opacity", 0);
        enlarge2.style("bottom", 0);
        shrink2.style("bottom", -1000);
      fullscreen_mark=0;
    };
  }
} 

document.onkeyup=function(event){ 
  var e_ = event || window.event || arguments.callee.caller.arguments[0]; 
  if(e_ && e_.keyCode==32 ){
    event.preventDefault();

    spacebardown_mark=0;
    canvasOpacity_mark=1;
  }
} 
//键盘监听
