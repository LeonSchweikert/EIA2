var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 7;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Aufgabe11.DavidStar("#b4b4b4");
            stars.push(star);
            let rect = new Aufgabe11.Rect("#3cb371");
            stars.push(rect);
            let dreieck = new Aufgabe11.Illuminati("#ee82ee");
            stars.push(dreieck);
        }
        animate();
    }
    function insertNewObject(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        let random = Math.random() * 12;
        if (random < 5) {
            let star = new Aufgabe11.DavidStar("#b4b4b4");
            star.x = mouseX;
            star.y = mouseY;
            stars.push(star);
        }
        else if (random < 9) {
            let rect = new Aufgabe11.Rect("#3cb371");
            rect.x = mouseX;
            rect.y = mouseY;
            stars.push(rect);
        }
        else {
            let dreieck = new Aufgabe11.Illuminati("#ee82ee");
            dreieck.x = mouseX;
            dreieck.y = mouseY;
            stars.push(dreieck);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map