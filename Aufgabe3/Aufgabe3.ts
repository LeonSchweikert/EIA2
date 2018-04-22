namespace Memory {

  
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
    
    let openA: string[] = [];        // Zwischenspeicherarray für geöffnete Karten 
    let openCards: number = 0;
    
    
    function main(): void {

        // Funktionsaufruf
        kartenPaare();
        // Funktionsaufruf
        anzahlSpieler();

        SpielInfo = document.getElementById("Spielinfo"); // Verknüpfung in HTML
        SpielFeld = document.getElementById("Spielfeld");

        
     // Spielkarten erzeugen 
        
     for (let i: number = 0; i < numPaare; i++) {
         
            createCard(worter[i]);
     
            createCard(worter[i]);
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
        
     SpielFeld.addEventListener("click", clickHandler);                    // Eventlistener liegt auf SpielFeld
                                                                          // Verweis auf die Funktion clickHandler
     }                                                                      //Ende Main function
    
  
    
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
    
    
    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");
      
        let n: string = _score.toString();
        player.innerText = _name; 
       
        scoreField.innerText = n;
        SpielInfo.appendChild(player);
        SpielInfo.appendChild(scoreField);
    }
    
    
    

    function createCard(_kartentext: string): void { 
        let card: HTMLElement = document.createElement("div");
      
        card.innerHTML = `<span>${_kartentext}</span>`;       
        
        card.setAttribute("class", "card hidden");
     
        cardArray.push(card);    
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
    
    
 function clickHandler (_event: MouseEvent) : void {                            //Mouse Event, 
        let cardClass: HTMLElement = <HTMLElement>_event.target;                // Klasse initialisieren
        if (cardClass.classList.contains("card")) {                             
       openCards ++;                                                            // Counter
            if (cardClass.classList.contains("hidden")) {                       // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");                           // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");                             // Klassen-Namen wird auf "visible" gesetzt
            }
        }

     
 if (openCards == 2) {                                                           // Bei zwei offen liegenden Karten:
            setTimeout(cardsCompare, 1500);                                     // wird Timeout gesetzt für 1500ms, bzw 1,5s, in dieser Zeit werden cards verglichen
        }
     
     if (openCards > 2) {                                                       // es ist nicht möglich mehr als zwei Karten gleichzeitig anzuzeigen, Kartenstatus wird von visible auf hidden geändert
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

 function cardsCompare () : void {                                                // Funktion soll offene Karten vergleichen
        let openA : HTMLElement[] = filterCardsByClass("visible");               // openA führt filter aus

        if (openA[0].children[0].innerHTML == openA[1].children[0].innerHTML) {   // wenn open A Stelle [0] und openA an Stelle [1] gleich sind
            for (let f: number = 0; f < openA.length; f++) {
                openA[f].classList.remove("visible");                             // visible wird entfernt bei gleichheit
                openA[f].classList.add("taken");                                  // Status von visible zu taken geändert
            }
        }
        else {                                                                   // wenn Karten in openA nicht identisch sind
            for (let f: number = 0; f < openA.length; f++) {
                openA[f].classList.remove("visible");                    //  Status visible wird entfernt
                openA[f].classList.add("hidden");                        // Status hidden 
            }
        }
     
     
     
    congratAlert();                                                             // Funktionsaufruf

        openA = [];                                                          // leeres Zwischenspeicherarray openA Array wird aufgerufen
        openCards = 0;                                                       // openCards auf 0 setzen
    }
    
    function filterCardsByClass (_filter : string) : HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));      // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert |  card (aus dem CSS-Dokument)
        
        }


    function congratAlert(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {                                        // wenn alle Kartenpaare gefunden wurden erschein pop up fenster mit nachricht
            alert("Glückwunsch !");
        }
        cardsTaken = [];
    }
    
    }