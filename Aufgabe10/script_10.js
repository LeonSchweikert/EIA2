var SeaworldCanvas;
(function (SeaworldCanvas) {
    window.addEventListener("load", init);
    let fishs = []; //variablen deklarieren
    let bubbles = [];
    let n = 5;
    let imagedata; //Hintergrund restaurieren
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        SeaworldCanvas.crc2 = canvas.getContext("2d");
        drawBottom();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * SeaworldCanvas.crc2.canvas.width;
            let b = Math.random() * (640 - 520) + 520;
            let c = Math.random() * (6 - 4) + 4;
            drawRocks(a, b, c);
        }
        drawPlant1(250, 580);
        drawPlant2(100, 610);
        drawPlant3(150, 590);
        drawPlant4(300, 620);
        drawPlant5(20, 570);
        drawWater();
        imagedata = SeaworldCanvas.crc2.getImageData(0, 0, 360, 640);
        for (let i = 0; i < n; i++) {
            let fish = new SeaworldCanvas.Fish();
            fish.x = Math.random() * SeaworldCanvas.crc2.canvas.width;
            fish.y = Math.random() * 180;
            fishs.push(fish);
        }
        for (let i = 0; i < n - 2; i++) {
            let bubble = new SeaworldCanvas.Bubbles();
            bubble.x = Math.random() * (220 - 200) + 300;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        SeaworldCanvas.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
    }
    function moveFishes() {
        for (let i = 0; i < fishs.length; i++) {
            fishs[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishs.length; i++)
            fishs[i].draw();
    }
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }
    function drawBottom() {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(0, 640);
        SeaworldCanvas.crc2.lineTo(0, 320);
        for (let i = 0; i < 360; i++) {
            SeaworldCanvas.crc2.lineTo(i, 14 * Math.sin(i * .014) + 495);
        }
        SeaworldCanvas.crc2.lineTo(360, 640);
        SeaworldCanvas.crc2.lineTo(0, 640);
        SeaworldCanvas.crc2.fillStyle = "rgb(180, 60, 0)";
        SeaworldCanvas.crc2.fill();
        SeaworldCanvas.crc2.closePath();
    }
    function drawWater() {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.lineTo(0, 640);
        SeaworldCanvas.crc2.lineTo(360, 640);
        SeaworldCanvas.crc2.lineTo(360, 0);
        SeaworldCanvas.crc2.lineTo(0, 0);
        SeaworldCanvas.crc2.fillStyle = "rgba(0, 180, 180, 0.22)";
        SeaworldCanvas.crc2.fill();
        SeaworldCanvas.crc2.closePath();
    }
    function drawPlant1(_x, _y) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(_x, _y);
        SeaworldCanvas.crc2.quadraticCurveTo(_x - 80, _y - 300, _x + 60, _y - 300);
        SeaworldCanvas.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        SeaworldCanvas.crc2.lineTo(_x, _y);
        SeaworldCanvas.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas.crc2.fill();
    }
    function drawPlant2(_x, _y) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(_x, _y);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 80, _y - 230, _x - 60, _y - 270);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas.crc2.lineTo(_x, _y);
        SeaworldCanvas.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas.crc2.fill();
    }
    function drawPlant3(_x, _y) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(_x, _y);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 80, _y - 280, _x - 40, _y - 300);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas.crc2.lineTo(_x, _y);
        SeaworldCanvas.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas.crc2.fill();
    }
    function drawPlant4(_x, _y) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(_x, _y);
        SeaworldCanvas.crc2.quadraticCurveTo(_x - 80, _y - 330, _x + 60, _y - 300);
        SeaworldCanvas.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        SeaworldCanvas.crc2.lineTo(_x, _y);
        SeaworldCanvas.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas.crc2.fill();
    }
    function drawPlant5(_x, _y) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.moveTo(_x, _y);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 80, _y - 250, _x - 60, _y - 300);
        SeaworldCanvas.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas.crc2.lineTo(_x, _y);
        SeaworldCanvas.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas.crc2.fill();
    }
    function drawRocks(_x, _y, _r) {
        SeaworldCanvas.crc2.beginPath();
        SeaworldCanvas.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        SeaworldCanvas.crc2.closePath();
        SeaworldCanvas.crc2.fillStyle = "rgb(100, 100, 100)";
        SeaworldCanvas.crc2.fill();
        SeaworldCanvas.crc2.stroke();
    }
})(SeaworldCanvas || (SeaworldCanvas = {}));
//# sourceMappingURL=script_10.js.map