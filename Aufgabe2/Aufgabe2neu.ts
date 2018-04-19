namespace Memory {

  
    document.addEventListener("DOMContentLoaded", main);

document.addEventListener("DOMContentLoaded", main);

    // Variablen einführen
    
    let worter: string[] = ["Katze", "Hund", "Maus", "Pferd", "Fliege", "Ameise", "Käfer", "Adler", "Hase", "Huhn"];

    let cardArray: HTMLElement[] = [];
   
    let numPaare: number;
    let numSpieler: number;

    let SpielInfo: HTMLElement; 
    let SpielFeld: HTMLElement;

    let score: number = 0; 
    let name: string = "Spieler ";
    
    
    function main(): void {


        // Funktionsaufruf
        kartenPaare();
        // Funktionsaufruf
        anzahlSpieler();

       
        SpielInfo = document.getElementById("Spielinfo"); // Verknüpfung in HTML
        SpielFeld = document.getElementById("Spielfeld");

        
        for (let i: number = 0; i < numPaare; i++) {
            createCard(worter[i], randomState());
           
            createCard(worter[i], randomState());
       
        }

        // Funktionsaufruf
        randomMix(cardArray);

        // Karten dem Spielbrett in cardField hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            SpielFeld.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        
        for (let i: number = 0; i < numSpieler; i++) {
            createPlayer(score, name + [i + 1]);
          
        }
    }
    function kartenPaare(): void {
        numPaare = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPaare < 5 || numPaare > 10) {
            kartenPaare();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function anzahlSpieler(): void {
        numSpieler = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numSpieler > 4 || numSpieler < 1) {
            anzahlSpieler();
            
        }
    }

    function createCard(_kartentext: string, _state: string): void { 
        let card: HTMLElement = document.createElement("div");
      
        card.innerText = _kartentext;
        
        card.setAttribute("class", "card " + _state);
     
        cardArray.push(card);
        
    }

    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");
      
        let n: string = _score.toString();
        player.innerText = _name; 
       
        scoreField.innerText = n;
        SpielInfo.appendChild(player);
        SpielInfo.appendChild(scoreField);
    }
    
    // Shuffle Arrays
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
    
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }

    // Zufallsgenerator als eigene funktion
    function randomState(): string {
        let randomState: number = Math.random();
   
        if (randomState <= .5) {

            return "hidden";
            // Status = hidden
        } else if (randomState > .5 && randomState <= .75) {
       
            return "taken";
        } else if (randomState > .75) {
           
            return "visible";
        }
    }


}