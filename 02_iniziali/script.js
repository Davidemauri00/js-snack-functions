/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (listaNomi){
    let listaIniziali = [];
    for (let i = 0; i < listaNomi.length; i++){
        listaIniziali.push(listaNomi[i].charAt(0));
    }
    return listaIniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]