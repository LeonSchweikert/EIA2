 namespace Memory4 {
     
     export interface CardDeck {
            cardContent: string[];
            cardColor: string;
            cardFont: string;
            cardBatch: string;
     }
    
     export let deck: CardDeck;
    
     export interface CardPacket {
            [cardName: string]: CardDeck;
     };
    
    
     export let decks: CardPacket = {};
     
            deck = {
                cardContent: ["Kaffee", "Tee", "Wasser", "Bier", "Saft", "Energy", "Smoothie", "Longdrink", "Cappuchino", "Espresso"],
                cardColor: "red",
                cardFont: "sans-serif",
                cardBatch: "10"
      };
    
      decks["Drinks"] = deck;
 
    
      deck = {
                cardContent: ["Hund", "Katze", "Fisch", "Pferd", "Maus", "Schlange", "Fliege", "Käfer", "Ameise", "Esel"],
                cardColor: "red",
                cardFont: "sans-serif",
                cardBatch: "10"
      };
    
      decks["Tiere"] = deck;

    
      deck = {
                cardContent: ["Peter", "Karl", "Max", "Horst", "Friedrich", "Helga", "Sieglinde", "Gerda", "Odila", "Adeltraud", "Albrun", "Otto", "Egon", "Dieter", "Bruno", "Wiebke", "Werner"],
                cardColor: "yellow",
                cardFont: "sans-serif",
                cardBatch: "18"
        };
     
   
    //Deckaufruf über Namen
      decks["Namen"] = deck;
     
    
    //Scoreboard
     export interface Scoreboard {
                player: string;
                score: number;
      }
    
     export let scoreboard: Scoreboard[] = [];

}
    