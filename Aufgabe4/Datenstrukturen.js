var Memory4;
(function (Memory4) {
    ;
    Memory4.decks = {};
    Memory4.deck = {
        cardContent: ["Kaffee", "Tee", "Wasser", "Bier", "Saft", "Energy", "Smoothie", "Longdrink", "Cappuchino", "Espresso"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Memory4.decks["Drinks"] = Memory4.deck;
    Memory4.deck = {
        cardContent: ["Hund", "Katze", "Fisch", "Pferd", "Maus", "Schlange", "Fliege", "K�fer", "Ameise", "Esel"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Memory4.decks["Tiere"] = Memory4.deck;
    Memory4.deck = {
        cardContent: ["Peter", "Karl", "Max", "Horst", "Friedrich", "Helga", "Sieglinde", "Gerda", "Odila", "Adeltraud", "Albrun", "Otto", "Egon", "Dieter", "Bruno", "Wiebke", "Werner"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardBatch: "18"
    };
    //Deckaufruf �ber Namen
    Memory4.decks["Namen"] = Memory4.deck;
    Memory4.scoreboard = [];
})(Memory4 || (Memory4 = {}));
//# sourceMappingURL=Datenstrukturen.js.map