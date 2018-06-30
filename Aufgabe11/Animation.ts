namespace Aufgabe11 {
    
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 7;

    //let rects: Rect[] = [];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#b4b4b4");
            stars.push(star);

            let rect: Rect = new Rect("#3cb371");
            stars.push(rect);

            let dreieck: Illuminati = new Illuminati("#ee82ee");
            stars.push(dreieck);
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        
        let mouseX: number = _event.clientX;
        let mouseY: number = _event.clientY;

        let random: number = Math.random() * 12;

        if (random < 5) {
            let star: DavidStar = new DavidStar("#b4b4b4");
            star.x = mouseX;
            star.y = mouseY;
            stars.push(star);
        } else if (random < 9) {
            let rect: Rect = new Rect("#3cb371");
            rect.x = mouseX;
            rect.y = mouseY;
            stars.push(rect);
        } else {
            let dreieck: Illuminati = new Illuminati("#ee82ee");
            dreieck.x = mouseX;
            dreieck.y = mouseY;
            stars.push(dreieck);
        }

    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}