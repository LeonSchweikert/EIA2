var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    //Variablen 
    var kartenA = [];
    var kartenO = 0;
    var kartenOArray = [];
    var kartenrest = [];
    var spielerCounter = 1;
    var sliderA = 1;
    var spielerPunkte = 0;
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("plusplayer").addEventListener("click", addPlayer);
        document.getElementById("minusplayer").addEventListener("click", removePlayer);
        document.getElementById("sliderinfo").addEventListener("change", createSlider);
    }
    function addPlayer() {
        if (spielerCounter < 4) {
            var player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("nameplayer").appendChild(player);
            spielerCounter++;
        }
    }
    function removePlayer() {
        var allPlayer = document.getElementsByClassName("player");
        var lastPlayer = allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        spielerCounter--;
    }
    function createSlider() {
        if (sliderA == 1) {
            var slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "5");
            slider.setAttribute("max", Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardAmount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderbox").appendChild(slider);
            sliderA++;
            var sliderValue_1 = document.createElement("p");
            sliderValue_1.setAttribute("id", "sliderValue");
            sliderValue_1.innerText = "Anzahl Kartenpaare: " + document.getElementById("slider").value;
            slider.oninput = function () {
                sliderValue_1.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderbox").appendChild(sliderValue_1);
        }
        else {
            sliderUpdate();
        }
    }
    function sliderUpdate() {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderA--;
        createSlider();
    }
    //Karte initialisieren     
    function createCard(_cardContent) {
        var card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        kartenA.push(card);
        kartenrest.push(card);
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        var target = _event.target;
        if (target.classList.contains("card")) {
            kartenO++;
            if (!(kartenO > 2) && target.classList.contains("hidden") && target != kartenOArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    kartenOArray.push(target);
                }
            }
            else {
                kartenO--;
            }
            if (kartenO == 2) {
                window.setTimeout(compareCards, 2000);
            }
        }
    }
    function compareCards() {
        if (kartenOArray[0].innerHTML == kartenOArray[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                kartenOArray[i].classList.remove("open");
                kartenOArray[i].classList.add("taken");
            }
            kartenrest.splice(0, 2);
        }
        else {
            for (var i = 0; i < kartenOArray.length; i++) {
                kartenOArray[i].classList.remove("open");
                kartenOArray[i].classList.add("hidden");
            }
        }
        kartenOArray = [];
        kartenO = 0;
        checkWin();
    }
    function checkWin() {
        if (kartenrest.length == 0) {
            alert("Sauber!");
        }
    }
    //Durstenfeld-Shuffle
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // Main Funktion zum Anzeigen der Spielerinfo und dem Memory
    function start() {
        document.getElementById("interface").style.display = "none";
        document.getElementById("Spielinfo").style.display = "block";
        document.getElementById("Spielfeld").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        var numPairs = parseInt(document.getElementById("slider").value);
        for (var i = 0; i < spielerCounter; i++) {
            var playerDiv = document.createElement("div");
            document.getElementById("Spielinfo").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + spielerPunkte + " Punkte";
        }
        //Karten erzeugen    
        for (var i = 0; i < numPairs; i++) {
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf der Shuffle Algorithmusses    
        shuffleArray(kartenA);
        for (var i = 0; i < kartenA.length; i++) {
            document.getElementById("spielerbox").appendChild(kartenA[i]);
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=memoryv2.js.map