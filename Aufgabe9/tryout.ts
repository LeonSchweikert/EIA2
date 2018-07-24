namespace Rageworld {

    window.addEventListener("load", init);

    let bubbles: Bubbles[] = [];
    let n: number = 5;
     export let ctx: CanvasRenderingContext2D;

    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        
        
        imagedata = crc2.getImageData(0, 0, 360, 640);

        for (let i: number = 0; i < n - 2; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = Math.random() * (220 - 200) + 300;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }

        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);


        moveBubbles();
        drawBubbles();
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








    drawSky();
    drawBottom();
    
    
    
    //Haus1
    drawHouse(140, 310);
    drawHouse2(190, 270);
    drawHouse3(290, 270);
    drawHouse4(350, 270);

    drawChimney(180, 280);
    drawChimney(210, 280);



    drawWindow1(10, 340);
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

    drawEntry1(20, 600)


    //Haus2
    drawWindow2(110, 230);
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
    
    
    //Haus3
    drawWindow3(205, 270);
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
    
    //Haus4
    drawWindow4(290, 140);
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
    drawAdvert3(280, 310)
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
    drawAdvert3(280, 560)

    drawEntry4(310, 575)



   //Human
    drawHead(280, 600)
    drawTriangle(200, 620);









    //Draw Funktionen

    function drawBottom(): void {
        crc2.beginPath();
        crc2.moveTo(0, 640);
        crc2.lineTo(0, 600);
        crc2.lineTo(4000, 640);

        crc2.fillStyle = "#626361";
        crc2.fill();
        crc2.closePath();
    }



    function drawHouse(_x: number, _y: number): void {
        crc2.fillStyle = "#A9A9A9";
        crc2.fillRect(_x - 180, _y - 0, 140, 300);
    }

    function drawHouse2(_x: number, _y: number): void {
        crc2.fillStyle = "#989898";
        crc2.fillRect(_x - 100, _y - 50, 140, 390);
    }

    function drawHouse3(_x: number, _y: number): void {
        crc2.fillStyle = "  #A9A9A9";
        crc2.fillRect(_x - 100, _y - 20, 140, 360);
    }

    function drawHouse4(_x: number, _y: number): void {
        crc2.fillStyle = "#C8C8C8";
        crc2.fillRect(_x - 70, _y - 150, 140, 490);
    }


    function drawChimney(_x: number, _y: number): void {
        crc2.fillStyle = "#e03906";
        crc2.fillRect(_x - 160, _y + 10, 10, 20);
    }



    function drawWindow1(_x: number, _y: number): void {
        crc2.fillStyle = "#dfe0db";
        crc2.fillRect(_x, _y, 10, 10);
    }

    function drawAdvert(_x: number, _y: number): void {
        crc2.fillStyle = "#797a77";
        crc2.fillRect(_x, _y, 80, 40);
    }


    function drawEntry1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(40, 608, 25, 1 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.stroke();

    }

    function drawWindow2(_x: number, _y: number): void {
        crc2.fillStyle = "#cdceca";
        crc2.fillRect(_x, _y, 17, 10);
    }


    function drawEntry2(_x: number, _y: number): void {
        crc2.fillStyle = "#A9A9A9";
        crc2.fillRect(_x, _y, 60, 25);
    }

    function drawWindow3(_x: number, _y: number): void {
        crc2.fillStyle = "#c0c1bb";
        crc2.fillRect(_x, _y, 19, 15);
    }

    function drawEntry3(_x: number, _y: number): void {
        crc2.fillStyle = "#989898";
        crc2.fillRect(_x, _y, 50, 20);
    }

    function drawWindow4(_x: number, _y: number): void {
        crc2.fillStyle = "#b9bab2";
        crc2.fillRect(_x, _y, 10, 19);
    }

    function drawAdvert3(_x: number, _y: number): void {
        crc2.fillStyle = "#989994";
        crc2.fillRect(_x, _y, 90, 10);
    }

    function drawEntry4(_x: number, _y: number): void {
        crc2.fillStyle = "#989898";
        crc2.fillRect(_x, _y, 25, 35);
    }














    function drawHead(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(80, 600, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.stroke();

    }

    function drawTriangle(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(-40, 730);
        crc2.lineTo(80, 620); 
        crc2.lineTo(210, 730); 
        crc2.closePath(); 
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.stroke();
    }



    function drawSky(): void {
        crc2.beginPath();
        crc2.lineTo(0, 640);
        crc2.lineTo(360, 640);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        let grad = crc2.createLinearGradient(400, 100, 360, 400);
        grad.addColorStop(0, "#989bf2");
        grad.addColorStop(0.5, "#d1d3ff");
        grad.addColorStop(1, "#edeeff");
        crc2.fillStyle = grad;
        crc2.fill();
        crc2.closePath();
    }




}



