var SeaworldCanvas2;
(function (SeaworldCanvas2) {
    window.addEventListener("load", init);
    let objects = [];
    let n = 5;
    let imagedata; //Hintergrund restaurieren
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        SeaworldCanvas2.crc2 = canvas.getContext("2d");
        drawBottom();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * SeaworldCanvas2.crc2.canvas.width;
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
        imagedata = SeaworldCanvas2.crc2.getImageData(0, 0, 360, 640);
        for (let i = 0; i < n; i++) {
            let fish = new SeaworldCanvas2.Fish();
            fish.x = Math.random() * SeaworldCanvas2.crc2.canvas.width;
            fish.y = Math.random() * 180;
            objects.push(fish);
        }
        for (let i = 0; i < n; i++) {
            let bubble = new SeaworldCanvas2.Bubbles();
            objects.push(bubble);
        }
        canvas.addEventListener("click", insertNewObjects);
        animate();
    }
    function insertNewObjects(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        for (let i = 0; i < 3; i++) {
            let food = new SeaworldCanvas2.Food();
            if (i == 1) {
                food.x = mouseX;
                food.y = mouseY;
                objects.push(food);
            }
            else {
                food.x = mouseX + Math.random() * 40 - 2;
                food.y = mouseY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        SeaworldCanvas2.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
    function drawBottom() {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(0, 640);
        SeaworldCanvas2.crc2.lineTo(0, 320);
        for (let i = 0; i < 360; i++) {
            SeaworldCanvas2.crc2.lineTo(i, 14 * Math.sin(i * .014) + 495);
        }
        SeaworldCanvas2.crc2.lineTo(360, 640);
        SeaworldCanvas2.crc2.lineTo(0, 640);
        SeaworldCanvas2.crc2.fillStyle = "rgb(180, 60, 0)";
        SeaworldCanvas2.crc2.fill();
        SeaworldCanvas2.crc2.closePath();
    }
    function drawWater() {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.lineTo(0, 640);
        SeaworldCanvas2.crc2.lineTo(360, 640);
        SeaworldCanvas2.crc2.lineTo(360, 0);
        SeaworldCanvas2.crc2.lineTo(0, 0);
        SeaworldCanvas2.crc2.fillStyle = "rgba(0, 180, 180, 0.22)";
        SeaworldCanvas2.crc2.fill();
        SeaworldCanvas2.crc2.closePath();
    }
    function drawPlant1(_x, _y) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(_x, _y);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x - 80, _y - 300, _x + 60, _y - 300);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        SeaworldCanvas2.crc2.lineTo(_x, _y);
        SeaworldCanvas2.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas2.crc2.fill();
    }
    function drawPlant2(_x, _y) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(_x, _y);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 80, _y - 230, _x - 60, _y - 270);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas2.crc2.lineTo(_x, _y);
        SeaworldCanvas2.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas2.crc2.fill();
    }
    function drawPlant3(_x, _y) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(_x, _y);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 80, _y - 280, _x - 40, _y - 300);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas2.crc2.lineTo(_x, _y);
        SeaworldCanvas2.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas2.crc2.fill();
    }
    function drawPlant4(_x, _y) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(_x, _y);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x - 80, _y - 330, _x + 60, _y - 300);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 30, _y);
        SeaworldCanvas2.crc2.lineTo(_x, _y);
        SeaworldCanvas2.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas2.crc2.fill();
    }
    function drawPlant5(_x, _y) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.moveTo(_x, _y);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 80, _y - 250, _x - 60, _y - 300);
        SeaworldCanvas2.crc2.quadraticCurveTo(_x + 30, _y - 130, _x - 30, _y);
        SeaworldCanvas2.crc2.lineTo(_x, _y);
        SeaworldCanvas2.crc2.fillStyle = "rgb(0, 140, 40)";
        SeaworldCanvas2.crc2.fill();
    }
    function drawRocks(_x, _y, _r) {
        SeaworldCanvas2.crc2.beginPath();
        SeaworldCanvas2.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        SeaworldCanvas2.crc2.closePath();
        SeaworldCanvas2.crc2.fillStyle = "rgb(100, 100, 100)";
        SeaworldCanvas2.crc2.fill();
        SeaworldCanvas2.crc2.stroke();
    }
})(SeaworldCanvas2 || (SeaworldCanvas2 = {}));
//# sourceMappingURL=Code_10.js.map