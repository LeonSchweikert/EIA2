
namespace Memory4 {

    window.addEventListener("load", main);

    
    //Variablen 

    let cardArray: HTMLElement[] = []; 

    let openCards: number = 0;
    let openA: HTMLElement[] = []; 

    let spielerCount: number = 1;
    let spielerPunkt: number = 0;

    let Spielinfo: HTMLElement; 
    let Spielfeld: HTMLElement;
    
    let checkKarten: HTMLElement[] = []; 
    let stepperA: number = 1;

    
    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("Auswahl").addEventListener("change", createAuswahl);
    }


    function addPlayer(): void {
        if (spielerCount < 4) {
        
            let player: HTMLElement = document.createElement("input");
          
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "20");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
           
            spielerCount++;
         
        }
    }


    function removePlayer(): void {
        document.getElementById("player").remove();
        spielerCount--;
        
    }

  
    function createAuswahl(): void {
        if (stepperA == 1) {
       
            
            let stepper: HTMLElement = document.createElement("input");
     
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", decks[document.getElementsByTagName("select").item(0).value].cardBatch);
         
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperA++;
         
        }

        else {
            stepperNew();
          
        }
    }

    function stepperNew(): void {
        document.getElementById("stepper").remove();

        stepperA--;
        createAuswahl();

    }

    //Karte initialisieren
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
   
        card.innerHTML = "<p>" + _cardContent + "</p>";
      
        card.setAttribute("class", "card hidden");
       
        cardArray.push(card);
       
        checkKarten.push(card);
       
    }

    function clickHandler (_event: MouseEvent) : void {                //Event-Handler
        
        let cardClass: HTMLElement = <HTMLElement>_event.target;
      
        if (cardClass.classList.contains("card")) {
        
        openCards ++;
       
            if (cardClass.classList.contains("hidden")) {

                cardClass.classList.remove("hidden");
     
                cardClass.classList.add("visible");
             
                openA.push(cardClass);
            
            }
        }

        if (openCards == 2) {
          
            setTimeout(cardsCompare, 1600);
      
        }

        if (openCards > 2) {
          
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function cardsCompare(): void {
        if (openA[0].innerHTML == openA[1].innerHTML) {
    
            for (let i: number = 0; i < 2; i++) {

                openA[i].classList.remove("visible");
                openA[i].classList.add("taken");
            }

            checkKarten.splice(0, 2);
         
        }

        else {

            for (let i: number = 0; i < openA.length; i++) {
                openA[i].classList.remove("visible");
                openA[i].classList.add("hidden");
            }
        }

        congratAlert();    // Funktionsaufruf

        openA = [];
        openCards = 0;
    }

    function congratAlert(): void {
        
        if (checkKarten.length == 0) {

            alert("Sauber!");
        }
    }

   
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
   
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
       
    }

  
    function start(): void {
        
        document.getElementById("interface").style.display = "none";
       
        document.getElementById("Spielinfo").style.display = "block";
        document.getElementById("Spielfeld").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("stepper")).value);

        // Spieler Anzeige generieren
        for (let i: number = 0; i < spielerCount; i++) {
            
            let spielerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("Spielinfo").appendChild(spielerDiv);
            spielerDiv.innerHTML = inputs[i].value + ": " + spielerPunkt + " Punkte";
        }

        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }

        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("Spielfeld").appendChild(cardArray[i]);
        }

        Spielinfo = document.getElementById("Spielinfo");
        Spielfeld = document.getElementById("Spielfeld");

        Spielfeld.addEventListener("click", clickHandler);
        // Verweis auf die Funktion clickHandler
    }
}