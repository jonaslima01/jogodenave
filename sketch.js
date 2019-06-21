var vidas = 3;
var pontos= 0;
let cargas = 6;
var nivel=1;
var nivel2=11;
var nivel3=21;
var fase = 0;
var tempo = 0;
var cd = 0;
var cs = 0;
var enter = 0;
var cor = 0;
var esc = 0;
var confc = 0;
var slow = 0;
var cont = 5;
var conti1 = 0;
var conti2 = 0;
var conti3 = 0;
var contpontos = 5;
var contm1 = false;
var contm3 = false;
var m2 = false;
var xo=Math.random() * 400;
var yo = 522;
var xo2 = Math.random() * 400;
var yo2 = -20;
var xo3 = Math.random() * 400;
var yo3 = -20;
let x = 512/2-10;
let y = 480;
var vxi = [];
var vyi = [];
let qti = 3;
var i = 0;
let xd = 0;
let yd = 0;
let a  = 0;
let qte = 3;
var disparo = false;
let xp = -50;
let yp = -50;
var disparo2 = true;
let imp = 0;
var disparo3 = true;
var esplosion = true;
let xdi = -50;
let ydi = -50;
var ydi2 = 80;
var xdi2 = 512/2;
var yi = 612;
let contdi = 0;
var cdt = 1;
let xb = 512/2;
let yb = 80;
var bv = 390;
var music7 = true;
var music6 = true;
var music5 = true;
var music4 = true;
var music3 = true;
var music2 = true;
var music1 = true;
var mu2 = true;
var mu1 = true;
var ne = false;
var nd = false;
var nn = true;
var impact = false;
var impact2 = false;
var imgfogo = [];
var fogo;
var imgtb = [];
var tb;
var imgvida = [];
var vida;
var imge1 = [];
var e1;
var imge2 = [];
var e2;
var conta5 = 0;
var slowa5 = 0;
var conta1 = 0;
var slowa1 = 0;
var conta2 = 0;
var slowa2 = 0;
var conta3 = 0;
var slowa3 = 0;
var conta4 = 0;
var slowa4 = 0;
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var imgdb = [];
var db;
var conta6 = 0;
var slowa6 = 0;
var a6 = 0;
var imgsi = [];
var si;
var conta7 = 0;
var slowa7 = 0;
var a7 = 0;
var imgco = [];
var coin;
var conta8 = 0;
var slowa8 = 0;
var a8 = 0;
var ycena1 = -398;
var ycena2 = -1308;
var ex = 0;
var ey = 0;
var t = 0;
function setup() {
  createCanvas(512, 512);
    for(i=0;i<qti;i++){
      vxi[i]=random(0,400);
      vyi[i]=-30;
    } 
}
 function preload() {
   soundFormats('mp3', 'ogg');
   mysond2 = loadSound('songs/stomp.wav');
   mySound = loadSound('songs/Laser_Shoot7.wav');
   mySound.setVolume(0.8);
   rocket = loadSound('songs/rocket.mp3');
   bossbattle = loadSound('music/bossbattle.ogg'); 
   musicfase1 = loadSound('music/song_monster.ogg'); 
   musicselect = loadSound('music/song_katanazero.ogg'); 
   musicselect.setVolume(0.5);
   musicgame = loadSound('music/game.ogg'); 
    musicgame.setVolume(0.5);
   musictuto = loadSound('music/tutorial.mp3'); 
   musictuto.setVolume(0.5);
    for(a1=0;a1<3;a1++){
     imgfogo[a1] = loadImage('fogo'+a1+'.png');
  }
    for(a2=0;a2<7;a2++){
    imgtb[a2] = loadImage('img/tb'+a2+'.png');
  }
   for(a3=0;a3<3;a3++){
    imgvida[a3] = loadImage('img/frame-'+a3+'.png');
  }
  for(a4=0;a4<9;a4++){
    imge1[a4] = loadImage('img/explosion-animation'+(a4+1)+'.png');
  }
      for(a5=0;a5<6;a5++){
    imge2[a5] = loadImage('img/exp'+a5+'.png');
  }
    for(a6=0;a6<8;a6++){
    imgdb[a6] = loadImage('anima/tiroboss'+a6+'.png');
  }
    for(a7=0;a7<8;a7++){
    imgsi[a7] = loadImage('anima/slow'+a7+'.png');
  }
       for(a8=0;a8<8;a8++){
    imgco[a8] = loadImage('anima/coin'+a8+'.png');
  }
  Me = loadImage('img/Missileladoe.png');
  Md = loadImage('img/Missileladod.png');
  Mn = loadImage('img/Missile.png');
  naveBe = loadImage('img/caveira0.png');
  naveBn = loadImage('img/caveira1.png');
  naveBd = loadImage('img/caveira2.png');
  naveB  = loadImage('img/boss.png');
  naveAn = loadImage('img/naveamarela.png');
  naveAd = loadImage('img/naveamarelad.png');
  naveAe = loadImage('img/naveamarelae.png');
  naveIn = loadImage('img/naveinimigo.png');
  naveId = loadImage('img/naveinimigod.png');
  naveIe = loadImage('img/naveinimigoe.png');
  naveVn = loadImage('img/navevermelha .png');
  naveVd = loadImage('img/navevermelhad.png');
  naveVe = loadImage('img/navevermelhae.png');
  navePn = loadImage('img/naveverde.png');
  navePd = loadImage('img/naveverded.png');
  navePe = loadImage('img/naveverdee.png');
  meteoro = loadImage('img/meteoro.png');
  t1 = loadImage('img/bullet.png');
  cena = loadImage('img/ideia1.png');
  moldura = loadImage('img/moldura.png');
 }
function keyPressed(){
     if (keyIsDown(LEFT_ARROW)) {
     cs = cs -1;
     }
     if (keyIsDown(RIGHT_ARROW)) {
     cs =cs +1;
     }
     if (keyIsDown(65)) {
     cs = cs -1;
     }
     if (keyIsDown(68)) {
     cs =cs +1;
     }
    if (keyIsDown(13)) {
     enter = 1;
     }
} 
function draw() {

  fogo = imgfogo[conta1];
  slowa1++;
  if (slowa1==3) {
    slowa1 = 0;
    conta1++;
  }
  if (conta1>=3) {
    conta1 = 0;
  }
     tb = imgtb[conta2];
  slowa2++;
  if (slowa2==10) {
    slowa2 = 0;
    conta2++;
  }
  if (conta2>=3) {
    conta2 = 0;
  }
  vida = imgvida[conta3];
  slowa3++
  if (slowa3==10) {
    slowa3 = 0;
    conta3++;
  }
  if (conta3==3) {
    conta3 = 0;
  }
  
   db = imgdb[conta6];
  slowa6++
  if (slowa6==10) {
    slowa6 = 0;
    conta6++;
  }
  if (conta6>=8) {
    conta6 = 0;
  }
  
     si = imgsi[conta7];
  slowa7++
  if (slowa7==5) {
    slowa7 = 0;
    conta7++;
  }
  if (conta7>=8) {
    conta7 = 0;
  }
  
       coin = imgco[conta8];
  slowa8++
  if (slowa8==5) {
    slowa8 = 0;
    conta8++;
  }
  if (conta8>=8) {
    conta8 = 0;
  }
  
  e1 = imge1[conta4];
 e2 = imge2[conta5];
  confc = cor;
  
   if(fase===0){
      if(fase===0&&music1==true){
        musicselect.loop();
       music1=false;
     }
  background(0);
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
        fill(250);
     textSize(14);
     text("              o incrívelmente difícil e rápido jogo de nave da minha rua", 10, 50);
       textSize(40);
     text("  escolha seu personagem:", 10, 150); 
     if (enter==1) {
     enter=0;
    fase=fase+1;
  }  
     textSize(30);
text("mude o personagem usando as teclas \n                    'a','d' ou '←','→' ", 5, 380);
     text("  aperte a tecla 'enter' para confirmar", 10, 450);
  if (cs %3=== 0) {
    cs = 0;
  }
     if(cs===0){
     //rect(20, 190, 140, 140);
       imageMode(CORNER);
       image(moldura,20, 190, 140, 140);
       cor = 0;
     }
     if(cs==1||cs==-2){
    // rect(512/2-70, 190, 140, 140);
       imageMode(CORNER);
     image(moldura,512/2-70, 190, 140, 140);
       cor = 1;
     }
     if(cs==2||cs==-1){
    // rect(512-150, 190, 140, 140);
       imageMode(CORNER);
     image(moldura,512-150, 190, 140, 140);
       cor = 2;
     }
     fill(250)
     //rect(30, 200, 120, 120);
     imageMode(CORNER);
     image(naveVn,30, 200, 120, 120);
     fill(250)
     //rect(512/2-60, 200, 120, 120);
     imageMode(CORNER);
     image(naveAn,512/2-60, 200, 120, 120);
     fill(250)
     //rect(512-140, 200, 120, 120);
     imageMode(CORNER);
     image(navePn,512-140, 200, 120, 120);
     
   }
 if(fase==1){                    //pre-tutorial
        background(0);
   t++;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
      if (cs %2=== 0) {
    cs = 0;
  }
     if(cs===0){
     //rect(20, 190, 140, 140);
       imageMode(CORNER);
       image(moldura, 280, 220, 140, 70);
       esc = 0;
     }
     if(cs==1||cs==-1){
    // rect(512/2-70, 190, 140, 140);
       imageMode(CORNER);
     image(moldura,50, 220, 140, 70);
       esc = 1;
     }
        fill(250)
       textSize(40)
       text("deseja fazer a fase tutorial?", 10, 120);
       textSize(50);
       text("SIM", 70, 270);
       textSize(50);
       text("NÃO", 300, 270);
    if (t>=20&&enter==1&&cs!=0) {  // leva para o tutorial
    fase=fase+1;
      musicselect.stop();
    enter=0;
  }  
       if (t>=20&&enter==1&&cs==0) {  // leva para a fase 1
    fase=fase+3;
      musicselect.stop();
    enter=0;
  }  
     textSize(30)

     text("  aperte a tecla 'enter' para confirmar", 10, 450);
        if (keyIsDown(82)){
           fase=fase+1;
        musicselect.stop();
         }
 }
  if(fase==2){                        //tutorial
        if(fase==2&&music6==true){
   musictuto.loop();
       music6=false;
        }
    nn=true;
       if (keyIsDown(LEFT_ARROW)||keyIsDown(65)) {
    ne = true;
    nn = false;
    nd = false;
    x -= 5;
  }
  else{
    ne = false;
  }

  if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
    nd = true;
    nn = false;
    ne = false;
    x += 5;
  }
    else{
      nd = false;
  }

  if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
    y -= 5;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
  }

  if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
    y += 5;
  }

  clear();
      background(0);
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
  if (disparo) {
   // ellipse(xd,yd,8,8);
          imageMode(CENTER);
            image(t1, xd, yd,4,15);
            }
 // ellipse(x, y, 20, 50);
imageMode(CENTER);
image(fogo, x, y+25,15,15);
               if(impact==true){
                    imageMode(CENTER);
                    image(e1,ex,ey);
                           slowa4=slowa4 + 1;
                             if (slowa4>=2) {
                                slowa4 = 0;
                                conta4=conta4 + 1;
                              }
                              if (conta4>=9) {
                                 conta4 = 0;
                              impact=false;
                              }
                 }
    if(impact2==true){
                    imageMode(CENTER);
                    image(e2,ex,ey,50,50);
                           slowa5=slowa5 + 1;
                             if (slowa5>=3) {
                                slowa5 = 0;
                                conta5=conta5 + 1;
                              }
                              if (conta5>=5) {
                                      mysond2.play();
                                 conta5 = 0;
                              impact2=false;
                              }
                 }
    
   if(nn==true){
               if(cor==0){
                 imageMode(CENTER);
              image(naveVn, x-1, y,50,50);
               }
                if(cor==1){
                 imageMode(CENTER);
              image(naveAn, x-1, y,50,50);
               }
                  if(cor==2){
                 imageMode(CENTER);
              image(navePn, x, y,50,50);
               }
      if(cor==2){
                 imageMode(CENTER);
              image(Mn, xp, yp,50,50);
               }
     }
   if(nd==true){
                if(cor==0){
                  imageMode(CENTER);
              image(naveVd, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAd, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePd, x, y,50,50);
               }
     }
   if(ne==true){
                  if(cor==0){
                  imageMode(CENTER);
              image(naveVe, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAe, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePe, x, y,50,50);
               }
     }
     cargas = 99999999999999999999;
   //ellipse(x, y, 20, 50);
              if(x<12){
                x = 12;
               }
              if(y<25){
                y = 25;
                }
               if(x>500){
                 x = 500;
                }
               if(y>400){
                 y = 400;
                } 
                if(tempo>= 880){
                       //ellipse(xo2,yo2,20,20) 
                     imageMode(CENTER);
                     image(vida, xo2, yo2,60,40);
                       yo2= yo2 + 3;
                     fill(200, 102, 153);
                       //ellipse(xo,yo,20,20) 
                   imageMode(CENTER);
                     image(si, xo, yo,30,30);
                       yo= yo + 6;
                          if ( yo >= 2000){
                             yo  = 0;
                             slow = 0;
                           }
                      } 
                   
       if (cargas <= 0) {
          cargas = 0;
          xp = 600;
          yp = 600;
          disparo2 = true;
        }
       if (keyIsDown(77) && (! disparo2) ){
          rocket.play();
          disparo2 = true; 
          yp = y;
          xp = x;
          cargas = cargas - 1 ;
        }
   
         fill(250, 220, 0);
       if (disparo2) {
             imageMode(CENTER);
                image(Mn, xp, yp,10,20);
                imageMode(CENTER);
                image(fogo, xp, yp+25,8,10); 
        }
             for(i=0;i<qti;i++){
                 fill('rgb(0,255,160)');
                 //ellipse(vxi[i], vyi[i], 50, 50);
                  imageMode(CENTER);
               image(meteoro, vxi[i], vyi[i],50,50);
                if(tempo>1920&&pontos<15){
                 vyi[i] = vyi[i] + 1;
                }
                if(vyi[i]>height){
                  vyi[i]=55/2-a;
                  vxi[i] = Math.random() * (width - 50);
                  a = Math.random() * 400;
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
                   if(keyIsDown(32) && (! disparo) ){ 
                       mySound.play();
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
                    if(dist(x,y,vxi[i],vyi[i])<50){
                      ex = x;
                       ey = y;
                      impact2 = true;
                       x = 512/2;
                       y = 480;
                       vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      
                  }
                       
                     if(dist(xd,yd,vxi[i],vyi[i])<29){
                      if(vyi[i]>0){
                       pontos = pontos + 1;
                       impact2 = true;
                       ex = vxi[i];
                       ey = vyi[i];
                      vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      }
                       disparo = false; 
                     }
                     if(dist(xd,yd,xo,yo)<14){
                       contm1=true;
                       xo =Math.random() * (width - 50);
                      yo =  525;
                      }
                    if(dist(x,y,xo,yo)<24){
                      contm1=true;
                       xo =Math.random() * (width - 50);
                       yo =  525;
                      }
               
                     if(dist(xd,yd,xo2,yo2)<14){
                       m2=true;
                       vidas = vidas + 2;
                       yo2 =  525;
                     }
                    if(dist(x,y,xo2,yo2)<24){
                      m2=true;
                      vidas = vidas + 2;
                      yo2 =  525;
                     }
                    if (disparo2) {
                      yp = yp -4; 
                         if (xp < vxi[imp]) {
                            xp = xp + 4;
                           }
                          if (xp > vxi[imp]) {
                             xp = xp - 4;
                           }
                         if (yp < 0) {
                             rocket.stop();
                             disparo2 = false; 
                           }
                      }
                    if(dist(xp,yp,vxi[i],vyi[i])<(55/2)+4){
                            rocket.stop();
                       if(vyi[i]>0){
                       pontos = pontos + 1;
                       impact2 = true;
                       ex = vxi[i];
                       ey = vyi[i];
                      vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      }
                            disparo2 = false;  
                    }
             }
         if(tempo<200){
    fill(250);    
    rect(0,430,512,112) 
           fill(0);
            textSize(25);
            text("use as teclas ←,↑,→,↓ ou  'a' 'w' 'd' 's'\n        para mover o personagem.", 20, 470);
           }     
         if(tempo>220&&tempo<420){
           fill(250);    
           rect(0,430,512,112) 
           fill(0);
           textSize(25);
           text("  use a tecla espaço para \natirar um projétil em linha reta.", 100, 470);
           }
         if(tempo>440&&tempo<640){
         fill(250);    
         rect(0,430,512,112) ;
         fill(0);
           textSize(25);
           text("caso tenha cargas use a tecla 'm' \npara atirar um projétil perseguidor.", 80, 470);
           }
        if(tempo>660&&tempo<860){
           fill(250);    
           rect(0,430,512,112) ;
           fill(0);
           textSize(25)
           text("   vidas e cargas são mostrados em \ncontadores no canto superior esquerdo. ", 50, 470);
           }
           if(tempo>660){
              if(tempo<860&&tempo%50!==0||tempo<1160&&tempo%50!=1){
                fill(255);
                textSize(18);
                text("vidas:∞", 10, 30);
                text("cargas:∞", 10, 60);
               }
           }
             if(tempo>860){
                fill(255);
                textSize(18);
                text("vidas:∞", 10, 30);
                text("cargas:∞", 10, 60);
            }
         if(tempo>880&&tempo<1280){
           fill(250);    
           rect(0,430,512,112) ;
           fill(0);
           textSize(25);
           text("  colodir com objetos ou acertar-los com\ndisparos te garante algum tipo de bônus ", 40,470);
         
           }
         if(tempo>1300&&tempo<1700){
           fill(250);    
           rect(0,430,512,112) ;
           fill(0);
           textSize(25);
           text("você passará por uma chuva de meteoros \n   acertalos com disparos os destruirão.", 40,470);
           
           }
         if(tempo>1720&&tempo<1920){
           fill(250);    
           rect(0,430,512,112) ;
           fill(0);
           textSize(25);
           text("acertar meteoros com disparos te da \n    pontos  para progredir no jogo.", 40,470);
           }
        if(tempo>1700){
            if(tempo<1700&&tempo%50!==0||tempo<1700&&tempo%50!=1){
               fill(255);
               textSize(18);
               text("pontos: "+pontos, 200, 30);
              text("nível:0", 420, 30);
             }
        }
        if(tempo>1500){
           fill(255);
               textSize(18);
               text("pontos: "+pontos, 200, 30);
               text("nível:0", 420, 30);
        }
           fill(255);
           textSize(18);
           text("tutorial", 420, 60);
     tempo++
                        if(contm1==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20);
                              text("inimigos mais lentos", 150, 240); 
                              }
                          else{
                            cont=0;
                          contm1=false;
                          }
                        }
                           if(m2==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20);
                              text("ganhou duas vidas", 150, 270); 
                              }
                          else{
                            cont=0;
                          m2=false;
                          }
                        }
                         if(contm3==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20);
                              text("ganhou duas vidas", 150, 270); 
                              }
                          else{
                            cont=0;
                          contm3=false;
                          }
                        }
     if(pontos>=15){
          pontos = 0;
            fase=fase+1;
       cs = 0;
       t = 0;
        vyi[i] = -50;
     }
    }
 if(fase==3){ 
           background(0);
   t++;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
      if (cs %2=== 0) {
    cs = 0;
  }
     if(cs===0){
     //rect(20, 190, 140, 140);
       imageMode(CORNER);
       image(moldura, 280, 220, 140, 70);
       esc = 0;
     }
     if(cs==1||cs==-1){
    // rect(512/2-70, 190, 140, 140);
       imageMode(CORNER);
     image(moldura,50, 220, 140, 70);
       esc = 1;
     }
        fill(250)
       textSize(35);
       text("  deseja refazer a fase tutorial?", 10, 120);
       textSize(50);
       text("SIM", 70, 270);
       textSize(50);
       text("NÃO", 300, 270);
    if (t>=20&&enter==1&&cs!=0) {  // leva para o tutorial
    fase=fase-1;
      musicselect.stop();
    enter=0;
      tempo=0;
  }  
       if (t>=20&&enter==1&&cs==0) {  // leva para a fase 1
    fase=fase+1;
    musictuto.stop();
    enter=0;
         cargas=6;
         slow=0;
  }  
     textSize(30);

     text("  aperte a tecla 'enter' para confirmar", 10, 450);
        if (keyIsDown(82)){
           fase=fase+1;
           musictuto.stop();
         }
 }
 if(fase==4){             //FASE 1
    if(fase==4&&music3==true){
      musicfase1.loop();
      nivel=1;
       music3=false;
     }
       nn=true;
        if (keyIsDown(LEFT_ARROW)||keyIsDown(65)) {
    ne = true;
    nn = false;
    nd = false;
    x -= 5;
  }
  else{
    ne = false;
  }

 if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
    nd = true;
    nn = false;
    ne = false;
    x += 5;
  }
    else{
      nd = false;
  }

  if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
    y -= 5;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
  }
  if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
    y += 5;
  }

  clear();
     background(0);
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
  if (disparo) {
   // ellipse(xd,yd,8,8) 
          imageMode(CENTER);
            image(t1, xd, yd,4,15);
            }
       if(impact2==true){
                    imageMode(CENTER);
                    image(e2,ex,ey,50,50);
                           slowa5=slowa5 + 1;
                             if (slowa5>=3) {
                                slowa5 = 0;
                                conta5=conta5 + 1;
                              }
                              if (conta5>=5) {
                                 conta5 = 0;
                                mysond2.play();
                              impact2=false;
                              }
                 }
imageMode(CENTER);
image(fogo, x, y+25,15,15);
   if(nn==true){
               if(cor==0){
                 imageMode(CENTER);
              image(naveVn, x, y,50,50);
               }
                if(cor==1){
                 imageMode(CENTER);
              image(naveAn, x-1, y,50,50);
               }
                  if(cor==2){
                 imageMode(CENTER);
              image(navePn, x-1, y,50,50);
               }
     }
   if(nd==true){
                if(cor==0){
                  imageMode(CENTER);
              image(naveVd, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAd, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePd, x, y,50,50);
               }
     }
   if(ne==true){
                  if(cor==0){
                  imageMode(CENTER);
              image(naveVe, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAe, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePe, x, y,50,50);
               }
     }
               // ellipse(x, y, 20, 50);
                     if(x<12){
                        x = 12;
                       }
                     if(y<25){
                        y = 25;
                       }
                
                     if(x>500){
                        x = 500;
                       }
                     if(y>480){
                        y = 480;
                       } 
                  if (cargas <= 0) {
                    cargas = 0;
                     xp = 600;
                     yp = 600;
                    disparo2 = true;
                    }
                  if (keyIsDown(77) && (! disparo2) ){ 
                   disparo2 = true; 
                    yp = y;
                    xp = x;
                    cargas = cargas - 1 ;
                  }
                 
                    fill(250, 220, 0);
                    if (disparo2) {
                imageMode(CENTER);
                image(Mn, xp, yp,10,20);
                imageMode(CENTER);
                image(fogo, xp, yp+25,8,10);
                    }
              
                for(i=0;i<qti;i++){
                      fill('rgb(0,255,160)');
                      //ellipse(vxi[i], vyi[i], 50, 50); 
                      imageMode(CENTER);
                      image(meteoro, vxi[i], vyi[i],50,50);
                     
                      vyi[i] = vyi[i] + nivel - slow ;
                     if(vyi[i]>height){
                       vyi[i]=55/2-a;
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
                           mySound.play();
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
                           //ellipse(xd,yd,8,8)
                           imageMode(CENTER);
                           image(t1, xd, yd,4,15);
                           }
                         if(dist(x,y,vxi[i],vyi[i])<50){
                            ex = x;
                            ey = y;
                            impact2 = true;
                            x = 512/2;
                            y = 480;
                            vidas = vidas - 1;
                            vxi[i] = Math.random() * (width - 50);
                            vyi[i] = - 50;
                            pontos = pontos -1;
                              cont = cont -1;
                            }
                         if(dist(xd,yd,vxi[i],vyi[i])<(55/2)+4){
                                               if(vyi[i]>0){
                       pontos = pontos + 1;
                       impact2 = true;
                       ex = vxi[i];
                       ey = vyi[i];
                      vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      }
                                 disparo = false; 
                               }
                         if(dist(xd,yd,xo,yo)<14){
                       contm1=true;
                       slow = slow + 3;
                       xo =Math.random() * (width - 50);
                      yo =  525;
                      }
                    if(dist(x,y,xo,yo)<24){
                      contm1=true;
                      slow = slow + 3;
                       xo =Math.random() * (width - 50);
                       yo =  525;
                      }
               
                     if(dist(xd,yd,xo2,yo2)<14){
                       m2=true;
                       vidas = vidas + 2;
                       yo2 =  525;
                     }
                    if(dist(x,y,xo3,yo3)<24){
                      contm3=true;
                      yo3 =  525;
                       pontos = pontos + 2;
                     }
                    if(dist(xd,yd,xo3,yo3)<14){
                      yo3 =  525;
                       pontos = pontos + 2;
                      contm3=true;
                       
                     }
                    if(dist(x,y,xo2,yo2)<24){
                      m2=true;
                      vidas = vidas + 2;
                      yo2 =  525;
                     }
                         if (disparo2) {
                            yp = yp -5;   
                                       
                        if (xp < vxi[imp]) {
                                  xp = xp + 4;
                                }
                        if (xp > vxi[imp]) {
                              xp = xp - 4;
                                }
                        if(xp == vxi[imp]) {
                                }
                               if (yp < 0) {
                                  disparo2 = false; 
                                }
                           }
                          if(dist(xp,yp,vxi[i],vyi[i])<(55/2)+4){
                                  if(vyi[i]>0){
                                   pontos = pontos + 1;
                                   impact2 = true;
                                   ex = vxi[i];
                                   ey = vyi[i];
                                  vxi[i] = Math.random() * (width - 50);
                                   vyi[i] = - 50;
                                  }                  
                                 disparo2 = false;               
                          }
                      }
             
                fill(255);
                textSize(18);
                text("nível: "+nivel, 420, 30);
                text("fase:1", 420, 60);
                 text("vidas: "+vidas, 10, 30);
                 text("pontos: "+pontos, 200, 30);
                text("cargas: "+cargas, 10, 60);
                    if(contm1==true) {
                              conti1++;
                              if(conti1<=100) {
                              textSize(20)
                              text("inimigos mais lentos", 150, 240); 
                              }
                          else{
                            conti1=0;
                          contm1=false;
                          }
                        }
                           if(m2==true) {
                              conti2++;
                              if(conti2<=100) {
                              textSize(20);
                              text("ganhou duas vidas", 150, 270); 
                              }
                          else{
                            conti2=0;
                          m2=false;
                          }
                        }
                        if(contm3==true) {
                              conti3++;
                              if(conti3<=100) {
                              textSize(20);
                              text("mais 2 pontos", 150, 310); 
                              }
                          else{
                            conti3=0;
                          contm3=false;
                          }
                        }
               
                    if(pontos <= 0){
               pontos = 0  ;          
              }
              if(pontos >= contpontos){
               nivel = nivel +1;
                contpontos = contpontos+5;
              }
                   if( nivel <= 10){
                     fill('rgb(0,255,0)');
                     if( nivel >= 6){              
                      // ellipse(xo2,yo2,20,20) 
                       imageMode(CENTER);
                       image(vida, xo2, yo2,60,40);
                       yo2= yo2 + 3
                      }
                     fill(200, 102, 153);
                     if( nivel >= 5){
                       //ellipse(xo,yo,20,20) 
                       imageMode(CENTER);
                     image(si, xo, yo,30,30);
                       yo= yo + 6;
                          if ( yo >= 2000){
                             yo  = 0;
                             slow = 0;
                           }
                      } 
                       if( nivel >= 3){
                       //ellipse(xo,yo,20,20) 
                     imageMode(CENTER);
                     image(coin, xo3, yo3,30,30);
                       yo3= yo3 + 6;
                          if ( yo3 >= 2000){
                             xo3 = Math.random() * (width - 50);
                             yo3  = 0;
                           }
                      } 
                   }
                     if(nivel == 10){
                        fase=fase+1;
                       tempo =0;
                       }
                     
                      if(vidas <= 0){
                        if(vidas <= 0 &&music7==true){
                          musicgame.loop();
                          music7=false;
                         }
                        musicfase1.stop();
                        x = 512/2-10;
                        y = 480;
                        qti = 0;
                        fill(250, 0, 0); 
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        textSize(20);
       text("caso deseje jogar novamente aperte a tecla 'f5'", 60, 420);
                        vidas = 0;
                        yo  = -12;
                        yo2  = -12;
                        disparo = false;
                        disparo2 = true; 
                      }
            }   
if(fase==5){                        //fase 2
 nn = true;                       
        if (keyIsDown(LEFT_ARROW)||keyIsDown(65)) {
             ne = true;
             nn = false;
             nd = false;
             x -= 5;
           }
           else{
             ne = false;
           }
         
          if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
             nd = true;
             nn = false;
             ne = false;
             x += 5;
           }
             else{
               nd = false;
           } 
  clear(); 
       background(0);
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
imageMode(CENTER);
image(fogo, x, y+25,15,15);
   if(impact2==true){
                    imageMode(CENTER);
                    image(e2,ex,ey,50,50);
                           slowa5=slowa5 + 1;
                             if (slowa5>=3) {
                                slowa5 = 0;
                                conta5=conta5 + 1;
                              }
                              if (conta5>=5) {
                                 conta5 = 0;
                                mysond2.play();
                              impact2=false;
                              }
                 }
 if(nn==true){
       imageMode(CENTER);
       image(naveIn, x, yi,50,50);
               if(cor==0){
                 imageMode(CENTER);
              image(naveVn, x, y,50,50);
               }
                if(cor==1){
                 imageMode(CENTER);
              image(naveAn, x-1, y,50,50);
               }
                  if(cor==2){
                 imageMode(CENTER);
              image(navePn, x-1, y,50,50);
               }
     }
   if(nd==true){
       imageMode(CENTER);
       image(naveId, x, yi,50,50);
                if(cor==0){
                  imageMode(CENTER);
              image(naveVd, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAd, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePd, x, y,50,50);
               }
     }
   if(ne==true){
       imageMode(CENTER);
       image(naveIe, x, yi,50,50);
                  if(cor==0){
                  imageMode(CENTER);
              image(naveVe, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAe, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePe, x, y,50,50);
               }
     }
                         //ellipse(x, y, 20, 50);
                                 if(x<12){
                                   x = 12;
                                  }
                                 if(y<25){
                                   y = 25;
                                   }
                                  if(x>500){
                                    x = 500;
                                   }
                                  if(y>480){
                                    y = 480;
                                   }  
         
                       if( nivel2 < 21&&vidas>0){
                                  if (y>150){
                                    y = y - tempo;
                                     textSize(38);
                            text("desvie dos disparos inimigos", 10, 330)
                                  }
                           if (yi>450){
                                    yi = yi - 4;
                                  }
                        fill(0, 102, 153);
                         //ellipse(x,yi,20,50);
                         
                       }
                                  
                       fill(255);
                       textSize(18)
                       text("nível: "+(nivel2-10), 420, 30);
                       cargas = 6;
                         if (disparo3) {
                            ydi = ydi - nivel2; 
                              if (ydi < 0) {
                                 disparo3 = false;
                                 cdt = 1}
                                } 
                          if (disparo3) {
                             fill(0, 102, 153);
                             //ellipse(xdi,ydi,8,8) 
                             imageMode(CENTER);
                             image(t1, xdi, ydi,4,15);
                           }
                         if(dist(xdi,ydi,x,y)<(55/2)+4){
                           vidas = vidas - 1;
                           xdi = -10;
                           ydi = -10;
                           disparo3 = false;  
                            pontos = pontos -10 ;
                           }
                      if(tempo>=100-nivel2&& !disparo3 && vidas>0){ 
                           mySound.play();
                           disparo3 = true; 
                            xdi = x;
                           ydi = yi;
                           nivel2 =nivel2 +1;
                           contdi++;
                          }
                        if(contdi>=11){ 
                          mySound.stop();
                          disparo3 = false;
                          }
                         
                       
                        fill(255);
                textSize(18);
                text("fase:2", 420, 60);
                 text("vidas: "+vidas, 10, 30);
                 text("pontos: "+pontos, 200, 30);
                text("cargas: "+cargas, 10, 60);
                      if(vidas <= 0){
                        musicfase1.stop();
                        if(vidas <= 0 &&music7==true){
                          musicgame.loop();
                          music7=false;
                         }
                         textSize(20) ;
                        fill(250, 0, 0); 
 text("caso deseje jogar novamente aperte a tecla 'f5'", 60, 420);
                      
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        x = 512/2-10;
                        vidas = 0;
                        disparo = false;
                        disparo2 = true; 
                        disparo3 = false;
                      }
         if(tempo %Math.random*101===0){
           tempo = 0;
         }
           tempo++;
         }
   if( nivel2 > 21&&vidas>0){
     nivel2 = 21;
     xdi = -50;
     ydi = -50;
               if (y<400){
                  y = y + 1 ;
                 yi = yi + 1 ;
                }
                       
                 else{ 
                 fase=fase+1;
                   musicfase1.stop();
                   }
      }
  if(fase==6){             //fase final
    
       nn=true;
    if(fase==6&&music5==true){
      bossbattle.loop();
       music5=false;
     }
        if (keyIsDown(LEFT_ARROW)||keyIsDown(65)) {
    ne = true;
    nn = false;
    nd = false;
    x -= 5;
  }
  else{
    ne = false;
  }

  if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
    nd = true;
    nn = false;
    ne = false;
    x += 5;
  }
    else{
      nd = false;
  }

  if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
    y -= 5;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
  }

  if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
    y += 5;
  }

  clear();
         background(0);
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
  if (disparo) {
   // ellipse(xd,yd,8,8) 
          imageMode(CENTER);
            image(t1, xd, yd,4,15);
            }
              
 if(impact2==true){
                    imageMode(CENTER);
                    image(e2,ex,ey,50,50);
                           slowa5=slowa5 + 1;
                             if (slowa5>=3) {
                                slowa5 = 0;
                                conta5=conta5 + 1;
                              }
                              if (conta5>=5) {
                                 conta5 = 0;
                                mysond2.play();
                              impact2=false;
                              }
                 }
imageMode(CENTER); 
image(fogo, x, y+25,15,15);
   if(nn==true){
               if(cor==0){
                 imageMode(CENTER);
              image(naveVn, x, y,50,50);
               }
                if(cor==1){
                 imageMode(CENTER);
              image(naveAn, x-1, y,50,50);
               }
                  if(cor==2){
                 imageMode(CENTER);
              image(navePn, x-1, y,50,50);
               }
     }
   if(nd==true){
                if(cor==0){
                  imageMode(CENTER);
              image(naveVd, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAd, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePd, x, y,50,50);
               }
     }
   if(ne==true){
                  if(cor==0){
                  imageMode(CENTER);
              image(naveVe, x, y,50,50);
               }
                 if(cor==1){
                  imageMode(CENTER);
              image(naveAe, x, y,50,50);
               }
                   if(cor==2){
                  imageMode(CENTER);
              image(navePe, x, y,50,50);
               }
     }
    
                        // ellipse(x, y, 20, 50);
                                 if(x<12){
                                   x = 12;
                                  }
                                 if(y<250){
                                   y = 250;
                                   }
                                  if(x>500){
                                    x = 500;
                                   }
                                  if(y>400){
                                    y = 400;
                                   }  
                 if (cargas <= 0) {
                    cargas = 0;
                     xp = 600;
                     yp = 600;
                    disparo2 = true;
                    }
                  if (keyIsDown(77) && (! disparo2) ){ 
                   disparo2 = true; 
                    yp = y;
                    xp = x;
                    cargas = cargas - 1 ;
                  }
                 
                    fill(250, 220, 0);
                    if (disparo2) {
                imageMode(CENTER);
                image(Mn, xp, yp,10,20);
                imageMode(CENTER);
                image(fogo, xp, yp+25,8,10);   
                    }
         for(i=0;i<qti;i++){
                 fill('rgb(0,255,160)');
                 //ellipse(vxi[i], vyi[i], 50, 50);
                 imageMode(CENTER);
                 image(tb, vxi[i], vyi[i],50,50);
                 vyi[i] = vyi[i] + 3;
                
                if(vyi[i]>height){
                  vyi[i]=25-a;
                  vxi[i] = Math.random() * (width - 50);
                           a = Math.random() * 400;
                  } 
                        if(x>vxi[i]){
                          vxi[i]=vxi[i] + (nivel3-20);
                             }
                        if(x<vxi[i]){
                          vxi[i]=vxi[i] - (nivel3-20);
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
                   if(keyIsDown(32) && (! disparo) ){ 
                      mySound.play();
                       disparo = true; 
                       xd = x;
                       yd = y;     
                     }
                     if (disparo) {
                      yd = yd -5; 
                         if (yd < 80) {
                             bv=bv-3;
                           disparo = false; 
                                      }
                        }
                     if (disparo) {
                     // ellipse(xd,yd,8,8)   
                     imageMode(CENTER);
                     image(t1, xd, yd,4,15);
                     }
                    if(dist(x,y,vxi[i],vyi[i])<50){
                       ex = x;
                       ey = y;
                       impact2 = true;
                       x = 512/2-10;
                       y = 400;
                      vidas = vidas -1;
                       vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                       }
                     if(dist(xd,yd,vxi[i],vyi[i])<29){
                                             if(vyi[i]>0){
                       pontos = pontos + 1;
                       impact2 = true;
                       ex = vxi[i];
                       ey = vyi[i];
                      vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      }
                                 disparo = false; 
                               }
                    if (disparo2) {
                      yp = yp -4; 
                         if (xp < vxi[imp]) {
                            xp = xp + 4;
                           }
                          if (xp > vxi[imp]) {
                             xp = xp - 4;
                           }
                         if (yp < 0) {
                             disparo2 = false; 
                           }
                      }
                    if(dist(xp,yp,vxi[i],vyi[i])<(55/2)+4){
                    if(vyi[i]>0){
                       pontos = pontos + 1;
                       impact2 = true;
                       ex = vxi[i];
                       ey = vyi[i];
                      vxi[i] = Math.random() * (width - 50);
                       vyi[i] = - 50;
                      }
                            disparo2 = false;  
                     }
         }
                    if(bv<=351&&bv>=312){
                      nivel3 =22;
                    }
                    if(bv<=312&&bv>=273){
                      nivel3 =23;
                    }
                    if(bv<=273&&bv>=234){
                      nivel3 =24;
                    }
                    if(bv<=234&&bv>=195){
                      nivel3 =25;
                    } 
                    if(bv<=195&&bv>=156){
                      nivel3 =26;
                    }
                    if(bv<=156&&bv>=117){
                      nivel3 =27;
                    } 
                    if(bv<=117&&bv>=78){
                      nivel3 =28;
                    }
                    if(bv<=78&&bv>=39){
                      nivel3 =29;
                      tempo = 0;
                    } 
                    if(bv<=39&&bv>=1){
                      nivel3 =30;
                    } 
                    if(bv<=1){
                      disparo3 = true; 
                      qti = 0;
                      bossbattle.stop();
                       tempo++;
                        if(tempo%9==0){
                      ex = random(10,500);
                      ey = random(50,100);
                      impact=true;
                                      }
                      if(tempo>=250){
                      fase = fase+1;
                      }
                    }
    if(nivel3>=26&&nivel3<=30){
                       if (disparo3) {
                            ydi2 = ydi2 + 3 +(nivel3-21); 
                              if (ydi2 > 512) {
                                 disparo3 = false;
                                 cd = 0;
                                 }
                                } 
                          if (disparo3) {
                             fill(0, 102, 153);
                            // ellipse(xdi2,ydi2,8,8)   
                            image(db,xdi2,ydi2,50,50);
                           }
                         if(dist(xdi2,ydi2,x,y)<(55/2)+4){
                           vidas = vidas - 1;
                           xdi2= -10;
                           ydi2= -10;
                           disparo3 = false;
                            pontos = pontos -1;
                           cd = 0;
                           }
                         if(cd>=100&& !disparo3) { 
                           disparo3 = true; 
                            xdi2= x;
                           ydi2= 80;
                          }
                           cd++;
    }

                     // ellipse(xb,yb,512,20)
                      imageMode(CENTER);
                         image(naveB, xb+1, 90,500,500/2);
                 if(x>521/3&&x<512/2){
                      imageMode(CENTER);
                        image(naveBn, xb+1,50,50,50);
                 }
                 if(x<521/3){
                      imageMode(CENTER);
                        image(naveBe, xb+1,50,50,50);
                 }
                if(x>512/2){
                      imageMode(CENTER);
                        image(naveBd, xb+1,50,50,50);
                 }
     if(impact==true){
                    imageMode(CENTER);
                    image(e1,ex,ey);
                           slowa4=slowa4 + 1;
                             if (slowa4>=2) {
                                slowa4 = 0;
                                conta4=conta4 + 1;
                              }
                              if (conta4>=9) {
                                 conta4 = 0;
                                mysond2.play();
                              impact=false;
                              }
                 }
                      fill(250);
                      textSize(18);
                      text("nível: "+(nivel3-20), 420, 30); 
                      text("fase:3", 420, 60);
                      text("vidas: "+vidas, 10, 30);
                      text("pontos: "+pontos, 200, 30);
                      text("cargas: "+cargas, 10, 60);
                      rect(30, 512-30, 400, 20, 20);
                        if(bv>=1){
                      fill('rgb(0,255,160)'); 
                      rect(35, 512-28, bv, 15, 20);
                        }
                    if(vidas <= 0){
                        x = 512/2-10;
                        y = 400;
                        qti = 0;
                        fill(250, 0, 0); 
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        bossbattle.stop()
                        if(vidas <= 0 &&music7==true){
                          musicgame.loop();
                          music7=false;
                         }
                        vidas = 0;
                        disparo = false;
                        disparo2 = true; 
                        disparo3 = false;
                      textSize(20);
       text("caso deseje jogar novamente aperte a tecla 'f5'", 60, 420);
                      }
                      
  
    }
  if(fase==7){
          background(0);
   t++;
    ycena1 = ycena1 +5;
    ycena2 = ycena2 +5;
    imageMode(CORNER);
    image(cena,0,ycena1,512, 910);
    image(cena,0,ycena2,512, 910);
    if(ycena1>=512){
    ycena1 = -1308;
    }
  if(ycena2>=512){
    ycena2 = -1308;
    }
        fill(255);
       textSize(50);
       text("Parabéns", 110, 120);
    textSize(50);
       text("Obrigado por jogar =D", 10, 320);
    textSize(20);
       text("caso deseje jogar novamente aperte a tecla 'f5'", 60, 420);
  }
}
