//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function newTitle() {
    //Dichiariamo una variabile e le diamo il valore dell'elemento selezionato dal foglio HTML
    const h1 = document.querySelector("h1");
    //Cambiano il testo 
    h1.innerText = "WOW SMARTPHONE!"; 
}

newTitle()


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function backgroundColor(){
    //Dichiariamo una variabile e le diamo il valore dell'elemento selezionato dal foglio HTML
    const body = document.querySelector("body");
    //Applichiamo la modifica al colore del background usando .style
    body.style.backgroundColor = "lightblue"
}

backgroundColor()


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function anchorLink() {
    //Dichiariamo una variabile e le diamo il valore degli selezionati dal foglio HTML
    const links = document.querySelectorAll(".spacing a");
    
    //Usiamo un ciclo per poter applicare le modifiche ad ogni elemento "a" di .spacing
    for (let i = 0; i < links.length; i++) {
        
        // Trattandosi di un tag ancora dobbiamo modificare direttamente il link che contiene e perciò utilizzeremo .href
        links[i].href = "https://www.lellikelly.it/";
        //Uniamo due esercizi in uno evitando ripetizioni ed aggiungiamo una classe ad ogni tag ancora
        links[i].classList.add("tag-ancora");
    }
}

anchorLink();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function visibility(){
    //Dichiariamo una variabile e le diamo il valore degli selezionati dal foglio HTML
    const img = document.querySelectorAll(".pic-size")
        
        //Usiamo un ciclo per poter applicare le modifiche ad ogni elemento "a" di .spacing
        for(let i = 0; i < img.length; i++){

            //Applichiamo la modifica sulla visibilità usando .stile e .visibility
            img[i].style.visibility = "visible";
        }
    }

    visibility()


    // ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, 
    //ogni volta che viene invocata




