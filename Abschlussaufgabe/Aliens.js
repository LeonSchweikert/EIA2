var Rageworld;
(function (Rageworld) {
    class Fish {
        move() {
            this.x += 1;
            if (this.x > 360) {
                this.x = -40;
            }
        }
        draw() {
            //Kuppel
            Rageworld.ctx.beginPath();
            Rageworld.ctx.moveTo(this.x, this.y);
            Rageworld.ctx.moveTo(this.x + 20, this.y - 10);
            Rageworld.ctx.arc(this.x + 17, this.y - 20, 10, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "transparent";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Unterteil
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 17, this.y - 5, 10, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "black";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Hauptteil
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 17, this.y + 1, 22, 0, Math.PI * 1, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "grey";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
        }
    }
    Rageworld.Fish = Fish;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=Aliens.js.map