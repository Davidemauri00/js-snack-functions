/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (listaNomi){
    let listaIniziali = [];
    for (let i = 0; i < listaNomi.length; i++){
        listaIniziali.push(listaNomi[i].charAt(0));
    }
    return listaIniziali;
}
function letterFilter (listaI, lettera){
    
}
// Invoca la funzione qui e stampa il risultato in console
const listaInit = iniziali(names);
const filtro = prompt("Inserisci una lettera:");
console.log
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]