var Seaworld;
(function (Seaworld) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBottom();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * crc2.canvas.width;
            let b = Math.random() * (640 - 520) + 520;
            let c = Math.random() * (6 - 4) + 4;
            drawRocks(a, b, c);
        }
        for (let i = 0; i < 12; i++) {
            let v = Math.random() * (300 - 50) + 50;
            let w = Math.random() * 500;
            let r = Math.random() * 8;
            drawBubbles(v, w, r);
        }
        drawPlant1(250, 580);
        drawPlant2(100, 610);
        drawPlant3(150, 590);
        drawPlant4(300, 620);
        drawPlant5(20, 570);
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * 400;
            let r = Math.random() * 300;
            let g = Math.random() * 300;
            let b = Math.random() * 300;
            drawFish(x, y);
        }
        drawWater();
    }
    function drawFish(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 60, _y + 55, _x + 65, _y - 35, _x, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(160, 20, 20)";
        crc2.fill();
        crc2.closePath();
    }
    function drawBottom() {
        crc2.beginPath();
        crc2.moveTo(0, 640);
        crc2.lineTo(0, 320);
        for (let i = 0; i < 360; i++) {
            crc2.lineTo(i, 14 * Math.sin(i * .014) + 495);
        }
        crc2.lineTo(360, 640);
        crc2.lineTo(0, 640);
        crc2.fillStyle = "rgb(180, 60, 0)";
        crc2.fill();
        crc2.closePath();
    }
    function drawWater() {
        crc2.beginPath();
        crc2.lineTo(0, 640);
        crc2.lineTo(360, 640);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "rgba(0, 180, 180, 0.22)";
        crc2.fill();
        crc2.closePath();
    }
    function drawBubbles(_x, _y, _r) {
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.stroke();
    }
    function drawPlant1(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 80, _y - 300, _x + 60, _y - 300);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    function drawPlant2(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 80, _y - 230, _x - 60, _y - 270);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    function drawPlant3(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 80, _y - 280, _x - 40, _y - 300);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    function drawPlant4(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 80, _y - 330, _x + 60, _y - 300);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    function drawPlant5(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 80, _y - 250, _x - 60, _y - 300);
        crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgb(0, 140, 40)";
        crc2.fill();
    }
    function drawRocks(_x, _y, _r) {
        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "rgb(140, 80, 80)";
        crc2.fill();
        crc2.stroke();
    }
})(Seaworld || (Seaworld = {}));
//# sourceMappingURL=Aufgabe9.js.map