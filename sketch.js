var vidas = 3;
var pontos=0;
let cargas = 66666666666666
var nivel=1;
var nivel2=11;
var nivel3=21;
var fase = 1
var slow=0
var cont=5;
var xo=Math.random() * 400
var yo=522
var xo2=Math.random() * 400
var yo2=-20
let x = 512/2;
let y = 480;
var vxi = []
var vyi = []
let qti = 3
var i=0 
let xd = []
let yd = []
let a  = 0
let qtd = 3
let j = 0
var disparo = false;
let xp = -50
let yp = -50
var disparo2 = true;
let imp = 0
var disparo3 = true;
let xdi = -50
let ydi = -50
let contdi = 0
var cdt = 1
let xb = 512/2
let yb = 80
function setup() {
  createCanvas(512, 512);
   for(i=0;i<qti;i++){
      vxi[i]=random(0,400)
      vyi[i]=-30
    }  
}

function draw() {
  fill(250)
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  ellipse(x, y, 20, 50);
       if(x<12){
          x = 12
         }
       if(y<25){
          y = 25
         }
  
       if(x>500){
          x = 500
         }
       if(y>480){
          y = 480
         } 
    if (cargas <= 0) {
      cargas = 0;
       xp = 600
       yp = 600
      disparo2 = true;
      }
    if (keyIsDown(77) && (! disparo2) ){ 
     disparo2 = true; 
      yp = y;
      xp = x;
      cargas = cargas - 1 
    }
   
      fill(250, 220, 0);
      if (disparo2) {
         ellipse(xp,yp,8,8)   
      }

  for(i=0;i<qti;i++){
        fill('rgb(0,255,160)');
        ellipse(vxi[i], vyi[i], 50, 50);
        vyi[i] = vyi[i]+ nivel - slow 
       if(vyi[i]>height){
         vyi[i]=55/2-a
         vxi[i] = Math.random() * (width - 50)
         a = Math.random() * 400
         } 
             if(y>vyi[0]){
                  if(vyi[0]>vyi[1]&&vyi[0]>vyi[2]){
                   imp = 0;
                    }
               } 
             if(y>vyi[1]){
                  if(vyi[1]>vyi[0]&&vyi[1]>vyi[2]){
                   imp = 1;
                    }
               }
             if(y>vyi[2]){
                  if(vyi[2]>vyi[0]&&vyi[2]>vyi[1]){
                   imp = 2;
                    }
               }
           fill(250, 0 , 0);
         if (keyIsDown(32) && (! disparo) ){ 
             disparo = true; 
             xd = x;
             yd = y;     
           }
           if (disparo) {
            yd = yd -5; 
               if (yd < 0) {
                 disparo = false; 
                  }
              }
          if (disparo) {
            ellipse(xd,yd,8,8)   
            }
          if(dist(x,y,vxi[i],vyi[i])<50){
             x = 512/2;
             y = 480;
             vidas = vidas - 1
             vxi[i] = Math.random() * (width - 50)
             vyi[i] = - 50
             pontos = pontos -10
               cont = cont -10
             }
          if(dist(xd,yd,vxi[i],vyi[i])<(55/2)+4){
            pontos = pontos + 1
            vxi[i] = Math.random() * (width - 50)
            vyi[i] = - 50
            disparo = false;
           }
          if(dist(xd,yd,xo,yo)<14){
            slow = slow + 3
            xo =Math.random() * (width - 50)
            yo =  525
           }
          if(dist(x,y,xo,yo)<24){
            slow = slow + 3
            xo =Math.random() * (width - 50)
            yo =  525
           }
    
          if(dist(xd,yd,xo2,yo2)<14){
            vidas = vidas + 2
            yo2 =  525
           }
          if(dist(x,y,xo2,yo2)<24){
         vidas = vidas + 2
          yo2 =  525
          }
          if (disparo2) {
             yp = yp -4; 
                if (xp < vxi[imp]) {
                   xp = xp + 4
                 }
                if (xp > vxi[imp]) {
                   xp = xp - 4
                 }
                if (yp < 0) {
                   disparo2 = false; 
                 }
            }
           if(dist(xp,yp,vxi[i],vyi[i])<(55/2)+4){
                  vxi[i] =Math.random() * (width - 50)
                  vyi[i] =  555
                  disparo2 = false;  
                  pontos = pontos + 1
            }
   }
 if(fase==1){
   fill(0, 102, 153);
   textSize(18)
   text("nível: "+nivel, 420, 30);
  }
      if(fase==2){
        fill(0, 102, 153);
        textSize(18)
        text("nível: "+(nivel2-10), 420, 30);
        qti = 0
        qtd = 0
        disparo = true;
        disparo2 = true;
        cargas = 6;
           if (disparo3) {
              ydi = ydi - nivel2; 
                if (ydi < 0) {
                   disparo3 = false;
                    cdt = 1}
                 } 
           if (disparo3) {
              fill(0, 102, 153);
              ellipse(xdi,ydi,8,8)   
            }
           if(dist(xdi,ydi,x,y)<(55/2)+4){
             vidas = vidas - 1
             cdt= 1
             xdi = -10
             ydi = -10
             disparo3 = false;  
             pontos = pontos -10 
            }
           if(cdt>=1&& !disparo3) { 
             cdt= - 1 
             disparo3 = true; 
             xdi = x;
             ydi = 480
             nivel2 =nivel2 +1
             contdi++
            }
          if(contdi>=10){
            disparo3 = false;
           }
          else{
            ellipse(x,480,20,50)
           }
      }
                    if(fase==3){
                      fill(0, 102, 153);
                      textSize(18)
                      text("nível: "+(nivel3-20), 420, 30);
                      nivel = 8
                      qti = 3
                      xdi = -50
                      ydi = -50
                      ellipse(xb,yb,512,20)
                      disparo = true;
                      disparo2 = true;
                     disparo3 = false;
                     }
  fill(0, 102, 153);
  textSize(18)
   text("fase: "+fase, 420, 60);
    text("vidas: "+vidas, 10, 30);
    text("pontos: "+pontos, 200, 30);
   text("cargas: "+cargas, 10, 60);
if( nivel <= 10){
       fill('rgb(0,255,0)');
       if( nivel >= 6){
         ellipse(xo2,yo2,20,20) 
         yo2= yo2 + 3
        }
       fill(200, 102, 153);
       if( nivel >= 5){
         ellipse(xo,yo,20,20) 
         yo= yo + 6
         if ( yo >= 2000){
            yo  = 0
            slow = 0
          }
        } 
  }
         if(nivel > 10 && nivel2 < 20){
           yo  = 550
           qti = 1
           slow = slow + 16
              if(vyi>100){
                vyi = vyi - 1 
               }
              if (y>100){
                 y = y - 1 
               }
              else{
                fase = 2
                }
           
          }
                if( nivel2 > 20 && nivel3 < 30){
                  yo  = 550
                  slow = 0
                  disparo3 = false;
                        if (y<480&&fase==2){
                           y = y + 1 
                         }
                        else{
                          fase = 3
                         }
                 }

  if(pontos <= 0){
   pontos = 0
  }
  if(pontos >= cont){
   nivel = nivel +1
    cont = cont+5
  }
  if(vidas <= 0){
    fill(250, 0, 0); 
    textSize(60);
    text("GAME OVER",80,512/2);
    x = 512/2;
    y = 480;
    vidas = 0;
    qti = 0;
  yo  = -12
      yo2  = -12
    disparo = false;
  disparo2 = true; 
  }
}
