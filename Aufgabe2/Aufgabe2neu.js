var Memory;
(function (Memory) {
    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("DOMContentLoaded", main);
    // Variablen einf�hren
    var worter = ["Katze", "Hund", "Maus", "Pferd", "Fliege", "Ameise", "K�fer", "Adler", "Hase", "Huhn"];
    var cardArray = [];
    var numPaare;
    var numSpieler;
    var SpielInfo;
    var SpielFeld;
    var score = 0;
    var name = "Spieler ";
    function main() {
        // Funktionsaufruf
        kartenPaare();
        // Funktionsaufruf
        anzahlSpieler();
        SpielInfo = document.getElementById("Spielinfo"); // Verkn�pfung in HTML
        SpielFeld = document.getElementById("Spielfeld");
        for (var i = 0; i < numPaare; i++) {
            createCard(worter[i], randomState());
            createCard(worter[i], randomState());
        }
        // Funktionsaufruf
        randomMix(cardArray);
        // Karten dem Spielbrett in cardField hinzuf�gen
        for (var i = 0; i < cardArray.length; i++) {
            SpielFeld.appendChild(cardArray[i]);
        }
        for (var i = 0; i < numSpieler; i++) {
            createPlayer(score, name + [i + 1]);
        }
    }
    function kartenPaare() {
        numPaare = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPaare < 5 || numPaare > 10) {
            kartenPaare();
        }
    }
    function anzahlSpieler() {
        numSpieler = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numSpieler > 4 || numSpieler < 1) {
            anzahlSpieler();
        }
    }
    function createCard(_kartentext, _state) {
        var card = document.createElement("div");
        card.innerText = _kartentext;
        card.setAttribute("class", "card " + _state);
        cardArray.push(card);
    }
    function createPlayer(_score, _name) {
        var player = document.createElement("div");
        var scoreField = document.createElement("div");
        var n = _score.toString();
        player.innerText = _name;
        scoreField.innerText = n;
        SpielInfo.appendChild(player);
        SpielInfo.appendChild(scoreField);
    }
    // Shuffle Arrays
    function randomMix(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Zufallsgenerator als eigene funktion
    function randomState() {
        var randomState = Math.random();
        if (randomState <= .5) {
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            return "taken";
        }
        else if (randomState > .75) {
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe2neu.js.map