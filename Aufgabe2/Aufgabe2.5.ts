namespace Memory {

  //Variablen 
  let worter: string[] = ["Katze", "Hund", "Maus", "Pferd", "Fliege", "Ameise", "K‰fer", "Adler", "Hase", "Huhn"];

  let karten: HTMLElement[] = [];

  let numberPaare: number;
    
  let numberSpieler: number;

  let spielInfo: HTMLElement;
    
  let spielfeld: HTMLElement;
    
    
      // Karten
  
    class Karte {

    cardContent: string;
        
    cardStatus: string;
        
    card: HTMLElement;

    constructor(_cardContent: string) {
      this.cardContent = _cardContent;

      // Kartenstatus
        
      let randomStatus: number = Math.random();
      if (randomStatus <= .5) {
        this.cardStatus = "hidden";
      } else if (randomStatus > .5 && randomStatus <= .75) {
        this.cardStatus = "taken";
      } else if (randomStatus > .75) {
        this.cardStatus = "visible";
      }
    }

    createCard(): HTMLElement[] {
      this.card = document.createElement("div");
      this.card.innerText = this.cardContent;
      this.card.setAttribute("class", "card " + this.cardStatus);
      karten.push(this.card);
      return karten;
    }
  }

// Spieler
    
  class Spieler {

    punktzahl: number;
    name: string;
    spieler: HTMLElement;

    constructor(_name: string) {
      this.name = _name;
      this.punktzahl = 0;
    }

    scoreUp(): number {
      this.punktzahl += 50;
      return this.punktzahl;
    }

    show(): void {
      this.spieler = document.createElement("div");
      this.spieler.innerHTML = `
        <span class="player-name">${this.name}</span>
        <span class="player-score">Punkte: ${this.punktzahl}</span>`;
      spielInfo.appendChild(this.spieler);
    }
  }
    
    // Shuffle Array: 
    
  function shuffleArray(_array: any[]): any[] {
      
    for (let i: number = _array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
  }
    
    
    function main(): void {
    //  Kartenpaare erfragen
    numberPaare = parseInt(prompt("Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
    if (numberPaare < 5 || numberPaare > 10) {
      numberPaare = 8;
    }
        
        
       // Anzahl der Spieler
    numberSpieler = parseInt(prompt("Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
    numberSpieler > 4 ? numberSpieler = 4 : numberSpieler = numberSpieler;

    // DOM abh√§ngige Variablen initialisieren
    spielInfo = document.getElementById("game-info");
    spielfeld = document.getElementById("card-container");
        
        
         // create cards
    for (let i: number = 0; i < numberPaare; i++) {
      let card: Karte = new Karte(worter[i]);
      card.createCard();

      let pair: Karte = new Karte(worter[i]);
      pair.createCard();
    }

    // Karten mischen
    shuffleArray(worter);

    // Karten anzeigen
    for (let i: number = 0; i < worter.length; i++) {
      spielfeld.appendChild(karten[i]);
    }

    // Spielinfo
    for (let i: number = 0; i < numberSpieler; i++) {
      let spieler: Spieler = new Spieler("Spieler " + (i + 1));
      spieler.show();
    }

  }
  document.addEventListener("DOMContentLoaded", main);
}