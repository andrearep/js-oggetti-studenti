
/* Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età. */

var studente = {
    nome: "Valentino",
    cognome: "Rossi",
    eta: 38
};
/*
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/
var span = document.getElementById("studente").querySelector("span");
for (var keys in studente) {
    span.insertAdjacentText("beforeend", (studente[keys] + " "))
}
/*
Creare un array di oggetti di studenti.
*/
var arrayStudenti = [
    {
        nome: "Valentino",
        cognome: "Rossi",
        eta: 38
    },

    {
        nome: "Marc",
        cognome: "Marquex",
        eta: 28
    },

    {
        nome: "Alex",
        cognome: "Rins",
        eta: 25
    },

    {
        nome: "Francesco",
        cognome: "Bagnaia",
        eta: 24
    }
]
/*
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
*/
for (var i = 0; i < arrayStudenti.length; i++) {
    document.querySelector("#studenti_nomi").insertAdjacentHTML("beforeend",
        `
        <div class="pilota">
        <img src="./assets/img/${i}.png" alt="">
        <span class="studente"></span>
    </div>
        `
    );

    for (var keys in arrayStudenti[i]) {

        if (keys == "nome" || keys == "cognome") {
            document.getElementsByClassName("studente")[i].insertAdjacentText("beforeend", (arrayStudenti[i][keys] + " "))
        }
    }
}

/*
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */
function insertObject() {
    var nomeUtente = prompt("inserire il tuon nome")
    var cognomeUtente = prompt("inserire il tuon cognome")
    var etaUtente = parseInt(prompt("inserire la tua età"))

    var utente = {
        nome: nomeUtente,
        cognome: cognomeUtente,
        eta: etaUtente
    }
    return utente;
}

arrayStudenti.push(insertObject())
console.log(arrayStudenti);