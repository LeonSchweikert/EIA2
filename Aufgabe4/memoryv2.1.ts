namespace Aufgabe4 {

    export interface Card {
        cardContent: string[];
        cardColor: string;
        cardFont: string;
        cardAmount: string;
    }

    let deck: Card;

    export interface Cards {
        [cardName: string]: Card;
    };

    export let cards: Cards = {};
    deck = {
                cardContent: ["Kaffee", "Tee", "Wasser", "Bier", "Saft", "Energy", "Smoothie", "Longdrink", "Cappuchino", "Espresso"],
                cardColor: "red",
                cardFont: "sans-serif",
                cardAmount: "10"
      };
    
    cards["Drinks"] = deck;

      deck = {
                cardContent: ["Hund", "Katze", "Fisch", "Pferd", "Maus", "Schlange", "Fliege", "Käfer"],
                cardColor: "red",
                cardFont: "sans-serif",
                cardAmount: "8"
      };
    cards["Tiere"] = deck;

    deck = {
                cardContent: ["Peter", "Karl", "Max", "Horst", "Friedrich", "Helga", "Sieglinde", "Gerda", "Odila", "Adeltraud", "Albrun", "Otto", "Egon", "Dieter", "Bruno", "Wiebke", "Werner"],
                cardColor: "red",
                cardFont: "sans-serif",
                cardAmount: "18"
        };
    cards["Namen"] = deck;



   
}