namespace Aufgabe8 {
    
    // Struktur des assoziativen Arrays als Datensatz einer studierenden Person
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        studiengang: string;
    }

    // Struktur assoziativen Arrays bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
         [matrikel: string]: Studi;
    }
 
    // assoziatives Array zur Speicherung einer Person unter einer Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}