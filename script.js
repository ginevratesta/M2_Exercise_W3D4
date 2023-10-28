// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function setNewTitle(newTitle) {
  //Dichiariamo una variabile e le diamo il valore dell'elemento selezionato dal foglio HTML
  const h1 = document.querySelector("h1");

  //Cambiamo il testo con .innerText
  h1.innerText = newTitle;
}

setNewTitle("WOW SMARTPHONE!");

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function setBackgroundColor(backgroundColor) {
  //Dichiariamo una variabile e le diamo il valore dell'elemento selezionato dal foglio HTML
  const body = document.querySelector("body");

  //Applichiamo la modifica al colore del background usando .style e .backgroundColor
  body.style.backgroundColor = backgroundColor;
}

setBackgroundColor("lightblue");

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

function setNewAddress(newAddress) {
  //Dichiariamo una variabile e le diamo il valore dell'elemento selezionato dal foglio HTML
  const address = document.querySelector("footer span");
  
  //Cambiamo l'indirizzo di riferimento con .innerText
  address.innerText = newAddress
}

setNewAddress("in Via SoloDaNoi, 32, ME");

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function setAnchorLinkClass(classToAdd) {
  //Dichiariamo una variabile e le diamo il valore degli elementi selezionati dal foglio HTML
  const newClass = document.querySelectorAll(".spacing a");

  //Usiamo un ciclo per poter applicare le modifiche ad ogni elemento "a" di .spacing
  for (let i = 0; i < newClass.length; i++) {
    //Aggiungiamo una nuova classe usando .classList.add
    newClass[i].classList.add(classToAdd);
  }
}

setAnchorLinkClass("tag-ancora");

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella;
// questa classe deve modificare la visibilità/invisibilità dell'immagine

function isImagesVisible(visible) {
  //Dichiariamo una variabile e le diamo il valore degli selezionati dal foglio HTML
  const img = document.querySelectorAll(".pic-size");

  //Usiamo un ciclo per poter applicare le modifiche ad ogni elemento con classe .pic-size
  for (let i = 0; i < img.length; i++) {
    //tramite un operatore ternario e l'ausilio di un booleano definiamo se aggiungere o meno la classe
    //.imageIsNotVisible
    visible
      ? img[i].classList.remove("imageIsNotVisible")
      : img[i].classList.add("imageIsNotVisible");
  }
}

isImagesVisible(true);

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente,
//ogni volta che viene invocata

function setRandomColor() {
  //Dichiariamo una variabile e le diamo il valore degli selezionati dal foglio HTML
  const price = document.querySelectorAll(".price");

  //Usiamo un ciclo per poter applicare le modifiche ad ogni elemento con classe .price
  for (let i = 0; i < price.length; i++) {
    //Dichiariamo tre variabili di rgb e quindi red green e blue e randomizziamo colori per ognuna
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    //Tramite .style e .color applichiamo le modifiche di colore randomico ad ogni refresh della pagina web
    price[i].style.color = `rgb(${red}, ${green}, ${blue})`;
  }
}

setRandomColor();
