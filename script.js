
let array_users = []

//creo il prototipo di persona
function Persona(nome ,cognome, citta){
    this.nome = nome
    this.cognome = cognome
    this.citta = citta
}

//prendo i valori dagli input
function prendi_input(){
    const n_input = document.querySelectorAll('body input')
    let risultato = []
    for (const key of n_input) {
        risultato.push(key.value)
    }
    return risultato
}

//creo la persona tramite il prototimo passandogli i dati utente presi da prendi_input
function salva_utente(dati_utente){
    const risultato = new Persona(dati_utente[0],dati_utente[1],dati_utente[2])
    array_users.push(risultato)
    mostra_utente(risultato)
}

//funzione che gestisce la creazione del div contenente l'utente
function mostra_utente(utente){
    const elemento_div = document.createElement('div')
    const elemento_nome = document.createElement('p')
    const elemento_cognome = document.createElement('p')
    const elemento_citta = document.createElement('p')
    const elemento_bottone = document.createElement('button')
    elemento_bottone.onclick = () => cancella_elemento(utente)

    elemento_bottone.innerHTML = 'cancella'
    elemento_nome.innerText = utente.nome
    elemento_cognome.innerText = utente.cognome
    elemento_citta.innerText = utente.citta

    elemento_div.appendChild(elemento_nome)
    elemento_div.appendChild(elemento_cognome)
    elemento_div.appendChild(elemento_citta)
    elemento_div.appendChild(elemento_bottone)

    console.log(document.querySelector('body'))
    document.querySelector('body').appendChild(elemento_div)
}

//funzione che elimina il div contenente l'utente ed elimina l'occorrenza della classe nell'array
function cancella_elemento(utente_da_cancellare){
    for (const key of array_users) {
        if (utente_da_cancellare === key){
            const index_div_da_cancellare = array_users.indexOf(key)
            array_users.pop(key)
            document.querySelectorAll('body div')[index_div_da_cancellare].remove()
        }
    }
}

//assegno al button l'onclick
document.querySelectorAll('body button')[0].onclick = () => salva_utente(prendi_input())
