var StudiVZ;
(function (StudiVZ) {
    window.addEventListener("load", input);
    let source = "https://eia2-node-leonschweikert.herokuapp.com";
    let inputs = document.getElementsByTagName("input");
    function input(_event) {
        console.log("Input");
        let insertB = document.getElementById("insert");
        let refreshB = document.getElementById("refresh");
        let searchB = document.getElementById("checkSearch");
        insertB.addEventListener("click", insertData);
        refreshB.addEventListener("click", refresh);
        searchB.addEventListener("click", search);
    }
    function insertData(_event) {
        console.log("Send Data");
        let genderB = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi; // Variable studi vom Datentyp Student
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderB.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        let change = JSON.stringify(studi); //string wird konvertiert mit stringify
        console.log(change);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", source + "?command=insert&data=" + change, true); //Daten werden in Url an Server geschickt
        xhr.addEventListener("readystatechange", handleRequest);
        xhr.send();
    }
    function handleRequest(_event) {
        console.log("");
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response); //alert Fenster mit Antwort: Daten empfangen
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", source + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }
    function handleStateChangeRefresh(_event) {
        //Gesendete Daten werden in Textfeld aktualiesiert
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search(_event) {
        //Suchfunktion 
        let mat = inputs[6].value;
        let xhr = new XMLHttpRequest(); //sende Request an Server
        xhr.open("GET", source + "?command=search&searchFor=" + mat, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response; //gibt gesuchten Wert aus 
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe6.1.js.map
