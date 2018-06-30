var SeaworldCanvas2;
(function (SeaworldCanvas2) {
    class Fish extends SeaworldCanvas2.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * SeaworldCanvas2.crc2.canvas.width;
            this.y = Math.random() * 300;
        }
        move() {
            this.x += 2;
            if (this.x > 360) {
                this.x = -75;
            }
        }
        draw() {
            SeaworldCanvas2.crc2.beginPath();
            SeaworldCanvas2.crc2.moveTo(this.x, this.y);
            SeaworldCanvas2.crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            SeaworldCanvas2.crc2.lineTo(this.x, this.y);
            SeaworldCanvas2.crc2.fillStyle = "rgb(160, 20, 20)";
            SeaworldCanvas2.crc2.fill();
            SeaworldCanvas2.crc2.closePath();
        }
    }
    SeaworldCanvas2.Fish = Fish;
})(SeaworldCanvas2 || (SeaworldCanvas2 = {}));
//# sourceMappingURL=Fish.js.map