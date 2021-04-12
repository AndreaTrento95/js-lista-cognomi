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
    var cognome = cognomi[i];
    
    var elemento_precedente = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = elemento_precedente + "<li>"+ cognome +"</li>";
   
}

// Indico la sua posizione all'utente
var count = 0;
while(count < cognomi.length ){
    var cognome = cognomi[count];
    if(cognome === cognome_utente){
        count += 1;
        console.log(" Sei il numero " + count) ;
    }
    
    count++;
}