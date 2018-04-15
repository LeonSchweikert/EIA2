var Memory;
(function (Memory) {
    //Variablen 
    var worter = ["Katze", "Hund", "Maus", "Pferd", "Fliege", "Ameise", "K�fer", "Adler", "Hase", "Huhn"];
    var karten = [];
    var numberPaare;
    var numberSpieler;
    var spielInfo;
    var spielfeld;
    // Karten
    var Karte = (function () {
        function Karte(_cardContent) {
            this.cardContent = _cardContent;
            // Kartenstatus
            var randomStatus = Math.random();
            if (randomStatus <= .5) {
                this.cardStatus = "hidden";
            }
            else if (randomStatus > .5 && randomStatus <= .75) {
                this.cardStatus = "taken";
            }
            else if (randomStatus > .75) {
                this.cardStatus = "visible";
            }
        }
        Karte.prototype.createCard = function () {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            this.card.setAttribute("class", "card " + this.cardStatus);
            karten.push(this.card);
            return karten;
        };
        return Karte;
    }());
    // Spieler
    var Spieler = (function () {
        function Spieler(_name) {
            this.name = _name;
            this.punktzahl = 0;
        }
        Spieler.prototype.scoreUp = function () {
            this.punktzahl += 50;
            return this.punktzahl;
        };
        Spieler.prototype.show = function () {
            this.spieler = document.createElement("div");
            this.spieler.innerHTML = "\n        <span class=\"player-name\">" + this.name + "</span>\n        <span class=\"player-score\">Punkte: " + this.punktzahl + "</span>";
            spielInfo.appendChild(this.spieler);
        };
        return Spieler;
    }());
    // Shuffle Array: 
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    }
    function main() {
        //  Kartenpaare erfragen
        numberPaare = parseInt(prompt("Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numberPaare < 5 || numberPaare > 10) {
            numberPaare = 8;
        }
        // Anzahl der Spieler
        numberSpieler = parseInt(prompt("Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numberSpieler > 4 ? numberSpieler = 4 : numberSpieler = numberSpieler;
        // DOM abhängige Variablen initialisieren
        spielInfo = document.getElementById("game-info");
        spielfeld = document.getElementById("card-container");
        // create cards
        for (var i = 0; i < numberPaare; i++) {
            var card = new Karte(worter[i]);
            card.createCard();
            var pair = new Karte(worter[i]);
            pair.createCard();
        }
        // Karten mischen
        shuffleArray(worter);
        // Karten anzeigen
        for (var i = 0; i < worter.length; i++) {
            spielfeld.appendChild(karten[i]);
        }
        // Spielinfo
        for (var i = 0; i < numberSpieler; i++) {
            var spieler = new Spieler("Spieler " + (i + 1));
            spieler.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe2.5.js.map