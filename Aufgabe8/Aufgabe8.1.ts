namespace Aufgabe8 {
    
    
    window.addEventListener("load", init);  //Listener initialisieren
    let address: string = "https://leoneia2-node.herokuapp.com/"; //Verlinkung zu Server

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


    function init(_event: Event): void {  //Eingabe Funktion
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkSearch");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        let convert: string = JSON.stringify(studi);
        console.log(convert);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }

    function handleStateChangeInsert(_event: ProgressEvent): void {   //bei Insert wird handleStatechange ausgeführt
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);                              //bei erfolgreicher Übertragung Alert response
        }
    }


    function refresh(_event: Event): void {  //refresh Funktion 
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }    
    
    function handleStateChangeRefresh(_event: ProgressEvent): void {        //reaktionsfunktion auf refresh
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;                        //bei erfolgreichem refresh wird response ausgeführt
        }            
    }
    
    function search(_event: Event): void {    //Suchfunktion 
        let mtrkl: string = inputs[6].value;  //max 6 stellige Zahl
        
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();    
    }
    
    function handleStateChangeSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {         //bei übereinstimmung mit Suche ausgabe response
            output.value += xhr.response;
        }           
    }
    
            

}