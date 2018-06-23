namespace SeaworldCanvas {
    
    window.addEventListener("load", init);
    
    let fishs: Fish[] = [];                                                 //variablen deklarieren
    let bubbles: Bubbles[] = [];
    let n: number = 5;
    export let crc2: CanvasRenderingContext2D;
    
    let imagedata: ImageData;                                               //Hintergrund restaurieren

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
       


       drawBottom();

        for (let i: number = 0; i < 10; i++) {
            let a: number = Math.random() * crc2.canvas.width;
            let b: number = Math.random() * (640 - 520) + 520;
            let c: number = Math.random() * (6 - 4) + 4;
            
            drawRocks(a, b, c);
           
        }


        drawPlant1(250, 580);
        drawPlant2(100, 610);
        drawPlant3(150,590);
        drawPlant4(300,620);
        drawPlant5(20,570);
        drawWater();

        imagedata = crc2.getImageData(0, 0, 360, 640);

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * 180;
            fishs.push(fish);
        }

        for (let i: number = 0; i < n - 2; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = Math.random() * (220 - 200) +300;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }

        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);

        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
    }

    function moveFishes(): void {
        for (let i: number = 0; i < fishs.length; i++) {
            fishs[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].draw();
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



  function drawBottom(): void {
        crc2.beginPath();
        crc2.moveTo(0, 640);
        crc2.lineTo(0, 320);
        for (let i: number = 0; i < 360; i++) {
            crc2.lineTo(i, 14 * Math.sin(i * .014) + 495);
        }
        crc2.lineTo(360, 640);
        crc2.lineTo(0, 640);
        crc2.fillStyle = "rgb(180, 60, 0)";
        crc2.fill();
        crc2.closePath();
    }


  function drawWater(): void {
        crc2.beginPath();
        crc2.lineTo(0, 640);
        crc2.lineTo(360, 640);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "rgba(0, 180, 180, 0.22)";
        crc2.fill();
        crc2.closePath();
    }
 function drawPlant1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x -80, _y - 300, _x + 60, _y - 300);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }

    function drawPlant2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x +80, _y - 230, _x - 60, _y - 270);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }

    
    
      function drawPlant3(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x +80, _y - 280, _x -40, _y - 300);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }

    
       function drawPlant4(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x -80, _y - 330, _x + 60, _y - 300);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    
    
         function drawPlant5(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x +80, _y - 250, _x - 60, _y - 300);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    
    function drawRocks(_x: number, _y: number, _r: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "rgb(100, 100, 100)";
        crc2.fill();
        crc2.stroke();
    }
}