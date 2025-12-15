/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function checkVocal (lettera){
    if (lettera === "a" || lettera === "e" || lettera === "i" || lettera === "o" || lettera === "u"){
        return true;
    }
    else{
        return false;
    }
}

function vocals (parola){
    let j = 0;
    for (i = 0;i < parola.length; i++){
        if (checkVocal(parola.charAt(i))){
            j++;
        }
    }
    return j;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)