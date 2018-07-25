var Rageworld;
(function (Rageworld) {
    class Bubbles {
        move() {
            this.y -= 1;
            if (this.y < 0) {
                this.y = 270;
            }
        }
        draw() {
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Rageworld.ctx.closePath();
            Rageworld.ctx.fillStyle = "#b4b4b4";
            Rageworld.ctx.fill();
        }
    }
    Rageworld.Bubbles = Bubbles;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=Smoke.js.map