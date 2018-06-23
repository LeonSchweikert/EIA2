var SeaworldCanvas;
(function (SeaworldCanvas) {
    class Fish {
        move() {
            this.x += 2;
            if (this.x > 200) {
                this.x = -100;
            }
        }
        draw() {
            SeaworldCanvas.crc2.beginPath();
            SeaworldCanvas.crc2.moveTo(this.x, this.y);
            SeaworldCanvas.crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            SeaworldCanvas.crc2.lineTo(this.x, this.y);
            SeaworldCanvas.crc2.fillStyle = "rgb(160, 20, 20)";
            SeaworldCanvas.crc2.fill();
            SeaworldCanvas.crc2.closePath();
        }
    }
    SeaworldCanvas.Fish = Fish;
    class Bubbles {
        move() {
            this.y -= 1;
            if (this.y < 0) {
                this.y = 200;
            }
        }
        draw() {
            SeaworldCanvas.crc2.beginPath();
            SeaworldCanvas.crc2.arc(this.x, this.y, this.r, 0, 3 * Math.PI);
            SeaworldCanvas.crc2.closePath();
            SeaworldCanvas.crc2.strokeStyle = "rgb(0, 0, 0)";
            SeaworldCanvas.crc2.stroke();
        }
    }
    SeaworldCanvas.Bubbles = Bubbles;
})(SeaworldCanvas || (SeaworldCanvas = {}));
//# sourceMappingURL=class.js.map