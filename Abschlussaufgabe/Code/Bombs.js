var Rageworld;
(function (Rageworld) {
    class Bombs {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.y += 1;
        }
        draw() {
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            Rageworld.ctx.closePath();
            Rageworld.ctx.fillStyle = "blue";
            Rageworld.ctx.fill();
        }
    }
    Rageworld.Bombs = Bombs;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=Bombs.js.map