
namespace StudiVZ {
    
    window.addEventListener("load", input);
    let source: string = "https://leoneia2-node.herokuapp.com/";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


    function input(_event: Event): void {                                                       //Funktion innput, Buttons mit Listener initialiesieren
        console.log("Input");
        
        let insertB: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshB: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchB: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkSearch");
        insertB.addEventListener("click", insertData);
        refreshB.addEventListener("click", refresh);
        searchB.addEventListener("click", search);
     
    }

    function insertData(_event: Event): void {      //Studentdata input
        console.log("Send Data");
        
        let genderB: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        
        let studi: Student;         // Variable studi vom Datentyp Student
        studi = {                  //interface Student
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderB.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
                  
        };
        
        
        let change: string = JSON.stringify(studi);              //string wird konvertiert mit stringify
        console.log(change);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", source + "?command=insert&data=" + change, true);    //Daten werden in Url an Server geschickt
        xhr.addEventListener("readystatechange", handleRequest);
        xhr.send();
    }

    function handleRequest(_event: ProgressEvent): void {  
    var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {                           //Gibt an das request abgeschlossen ist, Daten an Server geschickt              
            alert(xhr.response);                                               //alert Fenster mit Antwort: Daten empfangen
        }
    }


    function refresh(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", source + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }    
    
    function handleStateChangeRefresh(_event: ProgressEvent): void {  
                                                                                        //Gesendete Daten werden in Textfeld aktualiesiert
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }           
    }
    
    function search(_event: Event): void { 
                                                              //Suchfunktion 
        let mat: string = inputs[6].value;
        
        let xhr: XMLHttpRequest = new XMLHttpRequest();                    //sende Request an Server
        xhr.open("GET", source + "?command=search&searchFor=" + mat, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();    
    }
    
    function handleStateChangeSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];    
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {                 //gibt an das Suche beendet ist
            output.value += xhr.response;                            //gibt gesuchten Wert aus 
        }           
    }
    
            

}