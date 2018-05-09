
namespace Aufgabe4 {
    
    window.addEventListener("load", main);


    //Variablen 
    
    let kartenA: HTMLElement[] = [];
    let kartenO: number = 0;
    let kartenOArray: HTMLElement[] = [];
    let kartenrest: HTMLElement[] = [];
    let spielerCounter: number = 1;
    let sliderA: number = 1;
    let spielerPunkte: number = 0;

    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("plusplayer").addEventListener("click", addPlayer);
        document.getElementById("minusplayer").addEventListener("click", removePlayer);
        document.getElementById("sliderinfo").addEventListener("change", createSlider);
    }

    function addPlayer(): void {
        if (spielerCounter < 4) {
            let player: HTMLElement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("nameplayer").appendChild(player);
            spielerCounter++;
        }
    }

    function removePlayer(): void {
        let allPlayer: NodeListOf<Element> = document.getElementsByClassName("player");
        let lastPlayer: HTMLInputElement = <HTMLInputElement>allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        spielerCounter--;
    }

    function createSlider(): void {
        if (sliderA == 1) {
            let slider: HTMLElement = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "5");
            slider.setAttribute("max", cards[document.getElementsByTagName("select").item(0).value].cardAmount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderbox").appendChild(slider);
            sliderA++;
            let sliderValue: HTMLElement = document.createElement("p");
            sliderValue.setAttribute("id", "sliderValue");
            sliderValue.innerText = "Anzahl Kartenpaare: " + (<HTMLInputElement>document.getElementById("slider")).value;
            slider.oninput = function(): void {
                sliderValue.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderbox").appendChild(sliderValue);
        } else {
            sliderUpdate();
        }
    }

    function sliderUpdate(): void {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
       sliderA--;
        createSlider();
    }

    //Karte initialisieren     
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        kartenA.push(card);
       kartenrest.push(card);
        card.addEventListener("click", clickHandler);
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
           kartenO++;
            if (!(kartenO > 2) && target.classList.contains("hidden") && target != kartenOArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                   kartenOArray.push(target);
                }
            } else {
                kartenO--;
            }
            if (kartenO == 2) {
                window.setTimeout(compareCards, 2000);
            }
        }
    }

    function compareCards(): void {

        if (kartenOArray[0].innerHTML == kartenOArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                kartenOArray[i].classList.remove("open");
                kartenOArray[i].classList.add("taken");
            }
            kartenrest.splice(0, 2);
        } else {
            for (let i: number = 0; i < kartenOArray.length; i++) {
               kartenOArray[i].classList.remove("open");
                kartenOArray[i].classList.add("hidden");
            }
        }
       kartenOArray = [];
       kartenO = 0;
        checkWin();
    }



    function checkWin(): void {
        if (kartenrest.length == 0) {
            alert("Sauber!");
        }
    }

    //Durstenfeld-Shuffle
    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    // Main Funktion zum Anzeigen der Spielerinfo und dem Memory
    function start(): void {
        document.getElementById("interface").style.display = "none";
        document.getElementById("Spielinfo").style.display = "block";
        document.getElementById("Spielfeld").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("slider")).value);

        for (let i: number = 0; i < spielerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("Spielinfo").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + spielerPunkte + " Punkte";
        }

        //Karten erzeugen    
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }

        //Aufruf der Shuffle Algorithmusses    
        shuffleArray(kartenA);

        for (let i: number = 0; i < kartenA.length; i++) {
            document.getElementById("spielerbox").appendChild(kartenA[i]);
        }

    }

}