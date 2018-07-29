namespace Rageworld {

    window.addEventListener("load", init);


    let bombs: Bombs[] = [];
    let humans: Human[] = [];
    let bubbles: Bubbles[] = [];
    export let ctx: CanvasRenderingContext2D;
    let imagedata: ImageData;
    



    function init(_event: Event): void {
    alert("Make it Rain! click on the screen to release raindrops,try to hit the people on the street");




        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");


        drawSky();        //Himmel
        drawBottom();      //Straﬂe


        drawHouse(140, 310);   //Haus1
        drawHouse2(190, 270);   //Haus2
        drawHouse3(290, 270);   //Haus3
        drawHouse4(350, 270);    //Haus4

        drawChimney(180, 280);   //Kamin1
        drawChimney(200, 280);    //Kamin2


       
        drawWindow1(10, 340);   //Fenster Haus1
        drawWindow1(30, 340);
        drawWindow1(50, 340);
        drawWindow1(70, 340);
        drawWindow1(10, 370);
        drawWindow1(30, 370);
        drawWindow1(50, 370);
        drawWindow1(70, 370);
        drawWindow1(10, 400);
        drawWindow1(30, 400);
        drawWindow1(50, 400);
        drawWindow1(70, 400);
        drawWindow1(10, 430);
        drawWindow1(30, 430);
        drawWindow1(50, 430);
        drawWindow1(70, 430);

        drawAdvert(5, 460);

        drawWindow1(10, 520);
        drawWindow1(30, 520);
        drawWindow1(50, 520);
        drawWindow1(70, 520);
        drawWindow1(10, 550);
        drawWindow1(30, 550);
        drawWindow1(50, 550);
        drawWindow1(70, 550);

        drawEntry1(20, 600);

        
        drawWindow2(110, 230);  //Fenster Haus2
        drawWindow2(130, 230);
        drawWindow2(150, 230);
        drawWindow2(170, 230);
        drawWindow2(190, 230);
        drawWindow2(110, 260);
        drawWindow2(130, 260);
        drawWindow2(150, 260);
        drawWindow2(170, 260);
        drawWindow2(110, 290);
        drawWindow2(130, 290);
        drawWindow2(150, 290);
        drawWindow2(170, 290);
        drawWindow2(110, 320);
        drawWindow2(130, 320);
        drawWindow2(150, 320);
        drawWindow2(170, 320);
        drawWindow2(110, 350);
        drawWindow2(130, 350);
        drawWindow2(150, 350);
        drawWindow2(170, 350);
        drawAdvert(105, 380);
        drawWindow2(110, 430);
        drawWindow2(130, 430);
        drawWindow2(150, 430);
        drawWindow2(170, 430);
        drawWindow2(110, 460);
        drawWindow2(130, 460);
        drawWindow2(150, 460);
        drawWindow2(170, 460);
        drawWindow2(110, 490);
        drawWindow2(130, 490);
        drawWindow2(150, 490);
        drawWindow2(170, 490);
        drawWindow2(110, 520);
        drawWindow2(130, 520);
        drawWindow2(150, 520);
        drawWindow2(170, 520);
        drawWindow2(110, 550);
        drawWindow2(130, 550);
        drawWindow2(150, 550);
        drawWindow2(170, 550);
        drawEntry2(120, 585);


       

        drawWindow3(205, 270);   // Fenster Haus3
        drawWindow3(225, 270);
        drawWindow3(245, 270);
        drawWindow3(205, 290);
        drawWindow3(225, 290);
        drawWindow3(245, 290);
        drawWindow3(205, 310);
        drawWindow3(225, 310);
        drawWindow3(245, 310);
        drawWindow3(205, 310);
        drawWindow3(225, 310);
        drawWindow3(245, 310);
        drawWindow3(205, 330);
        drawWindow3(225, 330);
        drawWindow3(245, 330);
        drawWindow3(205, 350);
        drawWindow3(225, 350);
        drawWindow3(245, 350);
        drawWindow3(205, 370);
        drawWindow3(225, 370);
        drawWindow3(245, 370);
        drawWindow3(205, 390);
        drawWindow3(225, 390);
        drawWindow3(245, 390);
        drawWindow3(205, 410);
        drawWindow3(225, 410);
        drawWindow3(245, 410);
        drawWindow3(205, 430);
        drawWindow3(225, 430);
        drawWindow3(245, 430);
        drawWindow3(205, 450);
        drawWindow3(225, 450);
        drawWindow3(245, 450);
        drawWindow3(205, 470);
        drawWindow3(225, 470);
        drawWindow3(245, 470);
        drawWindow3(205, 490);
        drawWindow3(225, 490);
        drawWindow3(245, 490);
        drawWindow3(205, 510);
        drawWindow3(225, 510);
        drawWindow3(245, 510);
        drawWindow3(205, 530);
        drawWindow3(225, 530);
        drawWindow3(245, 530);
        drawWindow3(205, 550);
        drawWindow3(225, 550);
        drawWindow3(245, 550);
        drawWindow3(205, 570);
        drawWindow3(225, 570);
        drawWindow3(245, 570);
        drawEntry3(210, 590);

       

        drawWindow4(290, 140);    // Fenster Haus4
        drawWindow4(305, 140);
        drawWindow4(320, 140);
        drawWindow4(335, 140);
        drawWindow4(290, 160);
        drawWindow4(305, 160);
        drawWindow4(320, 160);
        drawWindow4(335, 160);
        drawWindow4(290, 180);
        drawWindow4(305, 180);
        drawWindow4(320, 180);
        drawWindow4(335, 180);
        drawWindow4(290, 200);
        drawWindow4(305, 200);
        drawWindow4(320, 200);
        drawWindow4(335, 200);
        drawWindow4(290, 220);
        drawWindow4(305, 220);
        drawWindow4(320, 220);
        drawWindow4(335, 220);
        drawWindow4(290, 220);
        drawWindow4(305, 220);
        drawWindow4(320, 220);
        drawWindow4(335, 220);
        drawWindow4(290, 240);
        drawWindow4(305, 240);
        drawWindow4(320, 240);
        drawWindow4(335, 240);
        drawWindow4(290, 260);
        drawWindow4(305, 260);
        drawWindow4(320, 260);
        drawWindow4(335, 260);
        drawWindow4(290, 280);
        drawWindow4(305, 280);
        drawWindow4(320, 280);
        drawWindow4(335, 280);
        drawAdvert3(280, 310);
        drawWindow4(290, 330);
        drawWindow4(305, 330);
        drawWindow4(320, 330);
        drawWindow4(335, 330);
        drawWindow4(290, 350);
        drawWindow4(305, 350);
        drawWindow4(320, 350);
        drawWindow4(335, 350);
        drawWindow4(290, 370);
        drawWindow4(305, 370);
        drawWindow4(320, 370);
        drawWindow4(335, 370);
        drawWindow4(290, 390);
        drawWindow4(305, 390);
        drawWindow4(320, 390);
        drawWindow4(335, 390);
        drawWindow4(290, 410);
        drawWindow4(305, 410);
        drawWindow4(320, 410);
        drawWindow4(335, 410);
        drawWindow4(290, 430);
        drawWindow4(305, 430);
        drawWindow4(320, 430);
        drawWindow4(335, 430);
        drawWindow4(290, 450);
        drawWindow4(305, 450);
        drawWindow4(320, 450);
        drawWindow4(335, 450);
        drawWindow4(290, 470);
        drawWindow4(305, 470);
        drawWindow4(320, 470);
        drawWindow4(335, 470);
        drawWindow4(290, 490);
        drawWindow4(305, 490);
        drawWindow4(320, 490);
        drawWindow4(335, 490);
        drawWindow4(290, 510);
        drawWindow4(305, 510);
        drawWindow4(320, 510);
        drawWindow4(335, 510);
        drawWindow4(290, 530);
        drawWindow4(305, 530);
        drawWindow4(320, 530);
        drawWindow4(335, 530);
        drawAdvert3(280, 560);

        drawEntry4(310, 575);




        imagedata = ctx.getImageData(0, 0, 360, 640);
        
         
        




        //Schleife Mensch

        for (let i: number = 0; i < 3; i++) {
            let human: Human = new Human();
            human.x = Math.random() * ctx.canvas.width;
            human.y = (620 - 610) + 620;
            humans.push(human);
        }




        //Schleife Rauch

        for (let i: number = 0; i < 10; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = Math.random() * (220 - 190) + 20;
            bubble.y = Math.random() * 310;
            bubble.r = Math.random() * 5;
            bubbles.push(bubble);
        }



        canvas.addEventListener("click", releaseBomb);
        hitHuman();
        animate();
    
    }




    function animate(): void {
   
        ctx.putImageData(imagedata, 0, 0);


        if (humans.length ==0) {
   
             alert("Congrats!");
             window.location.reload();

               
              }else{
    



        moveHumans();
        moveBubbles();
        moveBombs();
        drawHumans();
        drawBubbles();
        drawBombs();
        moveBombs();
        
        window.setTimeout(animate, 10);


    }
    }



//Regentropfen auslˆsen

function releaseBomb(_event: MouseEvent): void {
    
                  let mouseX: number= _event.clientX;
                  let mouseY: number= _event.clientY;


            let bomb: Bombs = new Bombs(mouseX, mouseY);
            bombs.push(bomb);

        }




//Bei Treffen von Menschen

function hitHuman(): void {
    
       window.setTimeout(hitHuman,10);
      
     for (let i: number =0; i< humans.length; i++) {
    


for (let s: number =0; s< bombs.length; s++){
    
   if (bombs[s].y > ctx.canvas.height) {
          
            bombs.splice(s,1);

}    
 if (bombs[s].x > humans[i].x && bombs[s].x < humans[i].x+20 && bombs[s].y > humans[i].y && bombs[s].y < humans[i].y+40) {
    
       humans.splice(i,1);

}
}
}


}







    function moveHumans(): void {
        for (let i: number = 0; i < humans.length; i++) {

            humans[i].move();
        }
    }




    function moveBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }


    function drawBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }


    function drawHumans(): void {
        for (let i: number = 0; i < humans.length; i++)
            humans[i].draw();
    }



    function moveBombs(): void {
        for (let i: number = 0; i < bombs.length; i++) {
            bombs[i].move();
        }
    }

    function drawBombs(): void {
        for (let i: number = 0; i < bombs.length; i++)
            bombs[i].draw();
    }






    //Draw  Hintergrund Funktionen
    function drawBottom(): void {
        ctx.beginPath();
        ctx.moveTo(0, 640);
        ctx.lineTo(0, 600);
        ctx.lineTo(4000, 640);

        ctx.fillStyle = "#626361";
        ctx.fill();
        ctx.closePath();
    }



    function drawHouse(_x: number, _y: number): void {
        ctx.fillStyle = "#A9A9A9";
        ctx.fillRect(_x - 180, _y - 0, 140, 300);
    }

    function drawHouse2(_x: number, _y: number): void {
        ctx.fillStyle = "#989898";
        ctx.fillRect(_x - 100, _y - 50, 140, 390);
    }

    function drawHouse3(_x: number, _y: number): void {
        ctx.fillStyle = "  #A9A9A9";
        ctx.fillRect(_x - 100, _y - 20, 140, 360);
    }

    function drawHouse4(_x: number, _y: number): void {
        ctx.fillStyle = "#C8C8C8";
        ctx.fillRect(_x - 70, _y - 150, 140, 490);
    }


    function drawChimney(_x: number, _y: number): void {
        ctx.fillStyle = "#e03906";
        ctx.fillRect(_x - 160, _y + 10, 10, 20);
    }



    function drawWindow1(_x: number, _y: number): void {
        ctx.fillStyle = "#dfe0db";
        ctx.fillRect(_x, _y, 10, 10);
    }

    function drawAdvert(_x: number, _y: number): void {
        ctx.fillStyle = "#797a77";
        ctx.fillRect(_x, _y, 80, 40);
    }


    function drawEntry1(_x: number, _y: number): void {
        ctx.beginPath();
        ctx.arc(40, 608, 25, 1 * Math.PI, 2 * Math.PI);
        ctx.fillStyle = "#A9A9A9";
        ctx.fill();

        ctx.stroke();

    }

    function drawWindow2(_x: number, _y: number): void {
        ctx.fillStyle = "#cdceca";
        ctx.fillRect(_x, _y, 17, 10);
    }


    function drawEntry2(_x: number, _y: number): void {
        ctx.fillStyle = "#A9A9A9";
        ctx.fillRect(_x, _y, 60, 25);
    }

    function drawWindow3(_x: number, _y: number): void {
        ctx.fillStyle = "#c0c1bb";
        ctx.fillRect(_x, _y, 19, 15);
    }

    function drawEntry3(_x: number, _y: number): void {
        ctx.fillStyle = "#989898";
        ctx.fillRect(_x, _y, 50, 20);
    }

    function drawWindow4(_x: number, _y: number): void {
        ctx.fillStyle = "#b9bab2";
        ctx.fillRect(_x, _y, 10, 19);
    }

    function drawAdvert3(_x: number, _y: number): void {
        ctx.fillStyle = "#989994";
        ctx.fillRect(_x, _y, 90, 10);
    }

    function drawEntry4(_x: number, _y: number): void {
        ctx.fillStyle = "#989898";
        ctx.fillRect(_x, _y, 25, 35);
    }


    function drawSky(): void {
        ctx.beginPath();
        ctx.lineTo(0, 640);
        ctx.lineTo(360, 640);
        ctx.lineTo(360, 0);
        ctx.lineTo(0, 0);
        let grad: CanvasGradient = ctx.createLinearGradient(400, 100, 360, 400);
        grad.addColorStop(0, "#989bf2");
        grad.addColorStop(0.5, "#d1d3ff");
        grad.addColorStop(1, "#edeeff");
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.closePath();
    }

   

}

