var Memory;
(function (Memory) {
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
    var openA = []; // Zwischenspeicherarray f�r ge�ffnete Karten 
    var openCards = 0;
    function main() {
        // Funktionsaufruf
        kartenPaare();
        // Funktionsaufruf
        anzahlSpieler();
        SpielInfo = document.getElementById("Spielinfo"); // Verkn�pfung in HTML
        SpielFeld = document.getElementById("Spielfeld");
        // Spielkarten erzeugen 
        for (var i = 0; i < numPaare; i++) {
            createCard(worter[i]);
            createCard(worter[i]);
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
        SpielFeld.addEventListener("click", clickHandler); // Eventlistener liegt auf SpielFeld
        // Verweis auf die Funktion clickHandler
    } //Ende Main function
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
    function createPlayer(_score, _name) {
        var player = document.createElement("div");
        var scoreField = document.createElement("div");
        var n = _score.toString();
        player.innerText = _name;
        scoreField.innerText = n;
        SpielInfo.appendChild(player);
        SpielInfo.appendChild(scoreField);
    }
    function createCard(_kartentext) {
        var card = document.createElement("div");
        card.innerHTML = "<span>" + _kartentext + "</span>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
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
    function clickHandler(_event) {
        var cardClass = _event.target; // Klasse initialisieren
        if (cardClass.classList.contains("card")) {
            openCards++; // Counter
            if (cardClass.classList.contains("hidden")) {
                cardClass.classList.remove("hidden"); // Klassen-Namen "hidden" wird gel�scht
                cardClass.classList.add("visible"); // Klassen-Namen wird auf "visible" gesetzt
            }
        }
        if (openCards == 2) {
            setTimeout(cardsCompare, 1500); // wird Timeout gesetzt f�r 1500ms, bzw 1,5s, in dieser Zeit werden cards verglichen
        }
        if (openCards > 2) {
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function cardsCompare() {
        var openA = filterCardsByClass("visible"); // openA f�hrt filter aus
        if (openA[0].children[0].innerHTML == openA[1].children[0].innerHTML) {
            for (var f = 0; f < openA.length; f++) {
                openA[f].classList.remove("visible"); // visible wird entfernt bei gleichheit
                openA[f].classList.add("taken"); // Status von visible zu taken ge�ndert
            }
        }
        else {
            for (var f = 0; f < openA.length; f++) {
                openA[f].classList.remove("visible"); //  Status visible wird entfernt
                openA[f].classList.add("hidden"); // Status hidden 
            }
        }
        congratAlert(); // Funktionsaufruf
        openA = []; // leeres Zwischenspeicherarray openA Array wird aufgerufen
        openCards = 0; // openCards auf 0 setzen
    }
    function filterCardsByClass(_filter) {
        return cardArray.filter(function (card) { return card.classList.contains(_filter); }); // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert |  card (aus dem CSS-Dokument)
    }
    function congratAlert() {
        var cardsTaken = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            alert("Sauber!");
        }
        cardsTaken = [];
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map