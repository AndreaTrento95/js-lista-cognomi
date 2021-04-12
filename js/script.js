// VARIABILI
var cognomi = [
    "Bosco",
    "Puntar",
    "Trento",
    "Alabamo",
    "Oscar",
    "Bossi"
];

// Chiedo all'utente il suo cognome con un prompt
var cognome_utente = prompt("Inserisci il tuo cognome");

// Inserisco il cognome all'interno dell'array cognomi
cognomi.push(cognome_utente);

// Ordino alfabeticamente le stringhe dell'array
cognomi.sort();   

// Stampo la lista ordinata alfabeticamente


for(var i = 0; i < cognomi.length; i++){
    cognome = cognomi[i];
    
    var elemento_precedente = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = elemento_precedente + "<li>"+ cognome +"</li>";

   /*  var trovato = false;
    while(trovato === false){
        if(cognome === nome_utente){
            trovato = true;
            console.log("TROVATO");
        }
        i++;
    }
     */
}