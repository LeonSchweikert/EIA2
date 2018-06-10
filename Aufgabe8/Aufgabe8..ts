namespace StudiVZ {
    
    // Struktur assoziatives Array für angelegte Studentenprofile
    
    export interface Student {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        studiengang: string;
    }

    // Struktur des assoziativen Arrays in dem Matrikelnummer gespeichert wird
    export interface Studis {
        [matrikel: string]: Student;
    }
 
    // assoziatives Array um eine Person mit Matrikel abzuspeichern
    export let studiHomoAssoc: Studis = {};  
}
