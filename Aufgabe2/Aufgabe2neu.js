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
        // Informationen sollen in HTML eingef�gt werden -> DOM abh�ngige Varaiblen erstellen = HTMLElement
        SpielInfo = document.getElementById("Spielinfo"); // Stelle in HTML = Verkn�pfung in HTML
        SpielFeld = document.getElementById("Spielfeld");
        // Spielkarten erzeugen - 2 mal createCard => 1Kartenpaar
        // randomState - zuf�lliger STATUS der Karte
        for (var i = 0; i < numPaare; i++) {
            createCard(worter[i], randomState());
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(worter[i], randomState());
        }
        // Funktionsaufruf
        randomMix(cardArray);
        // Karten dem Spielbrett in cardField hinzuf�gen
        for (var i = 0; i < cardArray.length; i++) {
            SpielFeld.appendChild(cardArray[i]);
        }
        // Spieler Anzeige generieren -> ersetzt class von Melvin
        for (var i = 0; i < numSpieler; i++) {
            createPlayer(score, name + [i + 1]);
        }
    } /****************** main function schlie�en*******************/
    // parseInt wandelt string in number um weil numPairs number erwartet
    // 10 am Ende legt Dezimalsystem f�r Eingabe fest
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
        // div erzeugen
        card.innerText = _kartentext;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut zu div hinzuf�gen: class = CSS; card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function createPlayer(_score, _name) {
        var player = document.createElement("div");
        var scoreField = document.createElement("div");
        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        var n = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        SpielInfo.appendChild(player);
        SpielInfo.appendChild(scoreField);
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
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
        // zuf�llige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl gr��er als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl gr��er als 0,75 - dann Status: "visible"
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe2neu.js.map