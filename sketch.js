var vidas = 3;
var pontos= 0;
let cargas = 6
var nivel=1;
var nivel2=11;
var nivel3=21;
var fase = 0
var tempo = 0;
var cd = 0;
var cs = 0;
var enter = false;
var cor = 0;
var confc = 0;
var slow = 0;
var cont = 5;
var contm1 = false;
var m2 = false;
var xo=Math.random() * 400;
var yo = 522;
var xo2 = Math.random() * 400;
var yo2 = -20;
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
let j = 0;
var disparo = false;
let xp = -50;
let yp = -50;
var disparo2 = true;
let imp = 0;
var disparo3 = true;
var esplosion = true;
let xdi = -50
let ydi = -50
var ydi2 = 80;
var xdi2 = 512/2;
var yi = 512
let contdi = 0
var cdt = 1
let xb = 512/2
let yb = 80;
var bv = 390
function setup() {
  createCanvas(512, 512);
    for(i=0;i<qti;i++){
      vxi[i]=random(0,400)
      vyi[i]=-30
    }  
}
function keyPressed(){
     if (keyIsDown(LEFT_ARROW)) {
     cs = cs -1
     }
     if (keyIsDown(RIGHT_ARROW)) {
     cs =cs +1
     }
}
function draw() {
  confc = cor
   if(fase===0){
     background(250)
        fill(0);
       textSize(40)
     text("  escolha seu personagem:", 10, 150);
     textSize(30)
  if (keyIsDown(16)) {
    fase=fase+1
  }  
     text("  aperte a tecla 'Shift' para confirmar", 10, 450);
  if (cs %3=== 0) {
    cs = 0
  }
     if(cs===0){
     rect(20, 190, 140, 140);
       cor = 0;
     }
     if(cs==1||cs==-2){
     rect(512/2-70, 190, 140, 140);
       cor = 1;
     }
     if(cs==2||cs==-1){
     rect(512-150, 190, 140, 140);
       cor = 2;
     }
     fill('red');
     rect(30, 200, 120, 120);
     fill(255, 255, 0);
     rect(512/2-60, 200, 120, 120);
     fill(64,224,208)
     rect(512-140, 200, 120, 120);
     
   }
 if(fase==1){
         background(250)
        fill(0);
       textSize(50)
       text("fase tutorial", 110, 120);
       textSize(20)
       text("caso deseje fazer o tutorial aperte a tecla 'r'", 60, 270);
       textSize(20)
       text("caso deseje pular o tutorial aperte a tecla 'enter'", 60, 420);
        if (keyIsDown(13)){
          
            fase=fase+2
         }
        if (keyIsDown(82)){
           fase=fase+1
         }
 }
  if(fase==2){
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
       if(confc===0){
         fill('red')
       }
       if(confc==1){
         fill('rgb(255, 255, 0)');
       } 
       if(confc==2){
         fill('rgb(64,224,208)');
       }
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
                if(tempo>= 880){
                     fill('rgb(0,255,0)');         
                       ellipse(xo2,yo2,20,20) 
                       yo2= yo2 + 3
                     fill(200, 102, 153);
                       ellipse(xo,yo,20,20) 
                       yo= yo + 6
                          if ( yo >= 2000){
                             yo  = 0
                             slow = 0
                           }
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
                if(tempo>1920&&pontos<15){
                 vyi[i] = vyi[i] + 1
                }
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
                   if(keyIsDown(32) && (! disparo) ){ 
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
                       vxi[i] = Math.random() * (width - 50)
                       vyi[i] = - 50
                       }
                     if(dist(xd,yd,vxi[i],vyi[i])<29){
                       pontos = pontos + 1
                      vxi[i] = Math.random() * (width - 50)
                      vyi[i] = - 50
                      disparo = false;
                     }
                     if(dist(xd,yd,xo,yo)<14){
                       contm1=true
                       xo =Math.random() * (width - 50)
                      yo =  525
                      }
                    if(dist(x,y,xo,yo)<24){
                      contm1=true
                       xo =Math.random() * (width - 50)
                       yo =  525
                      }
               
                     if(dist(xd,yd,xo2,yo2)<14){
                       m2=true
                       vidas = vidas + 2
                       yo2 =  525
                     }
                    if(dist(x,y,xo2,yo2)<24){
                      m2=true
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
         if(tempo<200){
            fill(0);
            textSize(25)
            text("use as teclas ←,↑,→ ou ↓ \npara mover o personagem.", 100, 350);
           }     
         if(tempo>220&&tempo<420){
           fill(0);
           textSize(25)
           text("use a tecla espaço para \natirar um projétil em linha reta.", 100, 350);
           }
         if(tempo>440&&tempo<640){
         fill(0);
           textSize(25)
           text("caso tenha cargas use a tecla 'm' \npara atirar um projétil perseguidor.", 80, 350);
           }
        if(tempo>660&&tempo<860){
           fill(0);
           textSize(25)
           text("   vidas e cargas são mostrados em \ncontadores no canto superior esquerdo. ", 50, 350);
           }
           if(tempo>660){
              if(tempo<860&&tempo%50!==0||tempo<1160&&tempo%50!=1){
                fill(0, 102, 153);
                textSize(18)
                text("vidas:∞", 10, 30);
                text("cargas:∞", 10, 60);
               }
           }
             if(tempo>860){
                fill(0, 102, 153);
                textSize(18)
                text("vidas:∞", 10, 30);
                text("cargas:∞", 10, 60);
            }
         if(tempo>880&&tempo<1280){
           fill(0);
           textSize(25)
           text("       colodir com objetos ou \n  acertar objetos com disparos \nte garante algum tipo de bônus ", 60,350);
         
           }
         if(tempo>1300&&tempo<1700){
           fill(0);
           textSize(25)
           text("naves verdes são consideradas inimigas\ne você deve acertalas com disparos.", 40,350);
           
           }
         if(tempo>1720&&tempo<1920){
           fill(0);
           textSize(25)
           text("acertar inimigos com disparos te dão \npontos que são importantes para \nprogredir no jogo.", 40,350);
           }
        if(tempo>1700){
            if(tempo<1700&&tempo%50!==0||tempo<1700&&tempo%50!=1){
               fill(0, 102, 153);
               textSize(18)
               text("pontos: "+pontos, 200, 30);
              text("nível:0", 420, 30);
             }
        }
        if(tempo>1500){
           fill(0, 102, 153);
               textSize(18)
               text("pontos: "+pontos, 200, 30);
               text("nível:0", 420, 30);
        }
           fill(0, 102, 153);
           textSize(18)
           text("tutorial", 420, 60);
     tempo++
                        if(contm1==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20)
                              text("inimigos mais lentos", 150, 240); 
                              }
                          else{
                            cont=0
                          contm1=false
                          }
                        }
                           if(m2==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20)
                              text("ganhou duas vidas", 150, 270); 
                              }
                          else{
                            cont=0
                          m2=false
                          }
                        }
     if(pontos>=15){
       background(250)
        fill(0);
       textSize(50)
       text("fim do tutorial", 110, 120);
       textSize(20)
       text("caso deseje refazer o tutorial aperte a tecla 'r'", 60, 270);
       textSize(20)
       text("caso deseje iniciar o jogo aperte a tecla 'enter'", 70, 420);
        if (keyIsDown(13)){
          pontos = 0
            fase=fase+1
         }
        if (keyIsDown(82)){
            pontos = 0
            tempo = 0 
         }
       
     }
    }
 if(fase==3){
                      fill(cor)
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
    if(confc===0){
         fill('red')
       }
       if(confc==1){
         fill('rgb(255, 255, 0)');
       } 
       if(confc==2){
         fill('rgb(64,224,208)');
       }
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
                      vyi[i] = vyi[i] + nivel - slow 
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
                       contm1=true
                       slow = slow + 3
                       xo =Math.random() * (width - 50)
                      yo =  525
                      }
                    if(dist(x,y,xo,yo)<24){
                      contm1=true
                      slow = slow + 3
                       xo =Math.random() * (width - 50)
                       yo =  525
                      }
               
                     if(dist(xd,yd,xo2,yo2)<14){
                       m2=true
                       vidas = vidas + 2
                       yo2 =  525
                     }
                    if(dist(x,y,xo2,yo2)<24){
                      m2=true
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
             
                fill(0, 102, 153);
                textSize(18)
                text("nível: "+nivel, 420, 30);
                text("fase:1", 420, 60);
                 text("vidas: "+vidas, 10, 30);
                 text("pontos: "+pontos, 200, 30);
                text("cargas: "+cargas, 10, 60);
                    if(contm1==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20)
                              text("inimigos mais lentos", 150, 240); 
                              }
                          else{
                            cont=0
                          contm1=false
                          }
                        }
                           if(m2==true) {
                              cont++;
                              if(cont<=100) {
                              textSize(20)
                              text("ganhou duas vidas", 150, 270); 
                              }
                          else{
                            cont=0
                          m2=false
                          }
                        }
               
                    if(pontos <= 0){
               pontos = 0            
              }
              if(pontos >= cont){
               nivel = nivel +1
                cont = cont+5
              }
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
                     if(nivel > 10){
                        fase=fase+1
                       tempo =0
                       }
                     
                      if(vidas <= 0){
                        x = 512/2-10
                        y = 480
                        qti = 0;
                        fill(250, 0, 0); 
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        vidas = 0;
                        yo  = -12
                        yo2  = -12
                        disparo = false;
                        disparo2 = true; 
                      }
            }   
if(fase==4){
                        if (keyIsDown(LEFT_ARROW)) {
                           x -= 5;
                         }
              
                        if (keyIsDown(RIGHT_ARROW)) {
                           x += 5;
                         }
                        clear();                                
       if(confc===0){
         fill('red')
       }
       if(confc==1){
         fill('rgb(255, 255, 0)');
       } 
       if(confc==2){
         fill('rgb(64,224,208)');
       }
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
         
                       if( nivel2 < 21&&vidas>0){
                                  if (y>150){
                                    y = y - tempo
                                  }
                                  if (yi>480){
                                    yi = yi - tempo
                                  }
                        fill(0, 102, 153);
                         ellipse(x,yi,20,50);
                       }
                                  
                       fill(0, 102, 153);
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
                             ellipse(xdi,ydi,8,8)   
                           }
                         if(dist(xdi,ydi,x,y)<(55/2)+4){
                           vidas = vidas - 1
                           xdi = -10
                           ydi = -10
                           disparo3 = false;  
                            pontos = pontos -10 
                           }
                         if(tempo>=100-nivel2&& !disparo3 && vidas>0) { 
                           disparo3 = true; 
                            xdi = x;
                           ydi = yi
                           nivel2 =nivel2 +1
                           contdi++
                          }
                        if(contdi>=11){
                          disparo3 = false;
                          }
                         
                       
                        fill(0, 102, 153);
                textSize(18)
                text("fase:2", 420, 60);
                 text("vidas: "+vidas, 10, 30);
                 text("pontos: "+pontos, 200, 30);
                text("cargas: "+cargas, 10, 60);
                      if(vidas <= 0){
                        fill(250, 0, 0); 
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        x = 512/2-10
                        vidas = 0;
                        disparo = false;
                        disparo2 = true; 
                        disparo3 = false;
                      }
         if(tempo %Math.random*101===0){
           tempo = 0
         }
           tempo++
         }
   if( nivel2 > 21&&vidas>0){
     nivel2 = 21
     xdi = -50
     ydi = -50
               if (y<400){
                  y = y + 1 
                }
                       
                 else{ 
                 fase=fase+1
                   }
      }
  if(fase==5){
                        fill(250);
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
       if(confc===0){
         fill('red')
       }
       if(confc==1){
         fill('rgb(255, 255, 0)');
       } 
       if(confc==2){
         fill('rgb(64,224,208)');
       }
                         ellipse(x, y, 20, 50);
                                 if(x<12){
                                   x = 12
                                  }
                                 if(y<250){
                                   y = 250
                                   }
                                  if(x>500){
                                    x = 500
                                   }
                                  if(y>400){
                                    y = 400
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
                 vyi[i] = vyi[i] + 3
                
                if(vyi[i]>height){
                  vyi[i]=25-a
                  vxi[i] = Math.random() * (width - 50)
                           a = Math.random() * 400
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
                       disparo = true; 
                       xd = x;
                       yd = y;     
                     }
                     if (disparo) {
                      yd = yd -5; 
                         if (yd < 80) {
                           if (bv > 4) {
                             bv=bv-3
                           }
                           if (bv < 4) {
                             bv=bv-1
                           }
                           disparo = false; 
                                      }
                        }
                     if (disparo) {
                      ellipse(xd,yd,8,8)   
                      }
                    if(dist(x,y,vxi[i],vyi[i])<50){
                       x = 512/2-10;
                       y = 400;
                      vidas = vidas -1
                       vxi[i] = Math.random() * (width - 50)
                       vyi[i] = - 50
                       }
                     if(dist(xd,yd,vxi[i],vyi[i])<29){
                       pontos = pontos + 1
                      vxi[i] = Math.random() * (width - 50)
                      vyi[i] = - 50
                      disparo = false;
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
                    } 
                    if(bv<=39&&bv>=1){
                      nivel3 =30;
                    } 
                    if(bv==1){
                      fase = fase+1
                    }
    if(nivel3>=26&&nivel3<=30){
                       if (disparo3) {
                            ydi2 = ydi2 + 3 +(nivel3-21); 
                              if (ydi2 > 512) {
                                 disparo3 = false;
                                 cd = 0
                                 }
                                } 
                          if (disparo3) {
                             fill(0, 102, 153);
                             ellipse(xdi2,ydi2,8,8)   
                           }
                         if(dist(xdi2,ydi2,x,y)<(55/2)+4){
                           vidas = vidas - 1
                           xdi2= -10
                           ydi2= -10
                           disparo3 = false;  
                            pontos = pontos -1
                           cd = 0
                           }
                         if(cd>=100&& !disparo3) { 
                           disparo3 = true; 
                            xdi2= x;
                           ydi2= 80;
                          }
                           cd++
    }
    /*if(nivel3>=26&&nivel3<=30){
                           if (disparo3) {
                            ydi2 = ydi2 + 3 ; 
                              if (ydi2 > 400) {
                                 disparo3 = false;
                                esplosion = false;
                                 cd = 0
                                 }
                                } 
                          if (disparo3) {
                             fill(0, 102, 153);
                             ellipse(xdi2,ydi2,8,8)   
                           }
                         if(dist(xdi2,ydi2,x,y)<(55/2)+4){
                           vidas = vidas - 1
                           xdi2= -10
                           ydi2= -10
                           disparo3 = false;  
                            pontos = pontos -1
                           cd = 0
                           }
                         if(cd>=100&& !disparo3) { 
                           disparo3 = true; 
                            xdi2= x;
                           ydi2= 80;
                          }
                           cd++
    
    }
    tentativa de criação de um projétil bomba inimigo
    */
                      fill(0, 102, 153);
                      textSize(18)
                      text("nível: "+(nivel3-20), 420, 30); 
                      text("fase:3", 420, 60);
                      text("vidas: "+vidas, 10, 30);
                      text("pontos: "+pontos, 200, 30);
                      text("cargas: "+cargas, 10, 60);
                      rect(30, 512-30, 400, 20, 20);
                      fill('rgb(0,255,160)'); 
                      ellipse(xb,yb,512,20)
                      rect(35, 512-28, bv, 15, 20);
                    if(vidas <= 0){
                        x = 512/2-10
                        y = 480
                        qti = 0;
                        fill(250, 0, 0); 
                        textSize(60);
                        text("GAME OVER",80,512/2);
                        vidas = 0;
                        disparo = false;
                        disparo2 = true; 
                        disparo3 = false;
                      }
                      
  
    }
  if(fase==6){
         background(250)
        fill(0);
       textSize(50)
       text("sério?", 110, 120);
    textSize(20)
       text("caso deseje jogar novamente aperte a tecla 'enter'", 60, 420);
       if (keyIsDown(13)) {
    fase=0
     } 
  }
}
