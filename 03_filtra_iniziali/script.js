/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letterFilter (listaI, lettera){
    let listaFinale = [];
    for (let i = 0; i < listaI.length; i++){
        if (listaI[i].charAt(0) === lettera){
            listaFinale.push(listaI[i]); 
        }
    }
    return listaFinale;
}
// Invoca la funzione qui e stampa il risultato in console
const filtro = prompt("Inserisci una lettera:");
console.log(letterFilter(names, filtro.toUpperCase().charAt(0)));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]