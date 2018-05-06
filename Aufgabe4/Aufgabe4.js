var Memory4;
(function (Memory4) {
    window.addEventListener("load", main);
    //Variablen 
    var cardArray = [];
    var openCards = 0;
    var openA = [];
    var spielerCount = 1;
    var spielerPunkt = 0;
    var Spielinfo;
    var Spielfeld;
    var checkKarten = [];
    var stepperA = 1;
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("Auswahl").addEventListener("change", createAuswahl);
    }
    function addPlayer() {
        if (spielerCount < 4) {
            var player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "20");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
            spielerCount++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        spielerCount--;
    }
    function createAuswahl() {
        if (stepperA == 1) {
            var stepper = document.createElement("input");
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", Memory4.decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperA++;
        }
        else {
            stepperNew();
        }
    }
    function stepperNew() {
        document.getElementById("stepper").remove();
        stepperA--;
        createAuswahl();
    }
    //Karte initialisieren
    function createCard(_cardContent) {
        var card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkKarten.push(card);
    }
    function clickHandler(_event) {
        var cardClass = _event.target;
        if (cardClass.classList.contains("card")) {
            openCards++;
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
    function cardsCompare() {
        if (openA[0].innerHTML == openA[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                openA[i].classList.remove("visible");
                openA[i].classList.add("taken");
            }
            checkKarten.splice(0, 2);
        }
        else {
            for (var i = 0; i < openA.length; i++) {
                openA[i].classList.remove("visible");
                openA[i].classList.add("hidden");
            }
        }
        congratAlert(); // Funktionsaufruf
        openA = [];
        openCards = 0;
    }
    function congratAlert() {
        if (checkKarten.length == 0) {
            alert("Sauber!");
        }
    }
    function randomMix(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    }
    function start() {
        document.getElementById("interface").style.display = "none";
        document.getElementById("Spielinfo").style.display = "block";
        document.getElementById("Spielfeld").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        var numPairs = parseInt(document.getElementById("stepper").value);
        // Spieler Anzeige generieren
        for (var i = 0; i < spielerCount; i++) {
            var spielerDiv = document.createElement("div");
            document.getElementById("Spielinfo").appendChild(spielerDiv);
            spielerDiv.innerHTML = inputs[i].value + ": " + spielerPunkt + " Punkte";
        }
        //Karten erzeugen
        for (var i = 0; i < numPairs; i++) {
            createCard(Memory4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(Memory4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);
        for (var i = 0; i < cardArray.length; i++) {
            document.getElementById("Spielfeld").appendChild(cardArray[i]);
        }
        Spielinfo = document.getElementById("Spielinfo");
        Spielfeld = document.getElementById("Spielfeld");
        Spielfeld.addEventListener("click", clickHandler);
        // Verweis auf die Funktion clickHandler
    }
})(Memory4 || (Memory4 = {}));
//# sourceMappingURL=Aufgabe4.js.map