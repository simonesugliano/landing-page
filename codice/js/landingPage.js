//script per disclaimer nelle pagine
function visualizza_messaggio(){
window.alert("Questa landing page è stata realizzata interamente a mano con HTML, CSS e JavaScript, senza l’uso di librerie o builder. Ho scelto di non utilizzare una modale (come nella home del sito CV) per mostrare un’interazione alternativa tramite alert. Il comparto social, non oggetto dei miei progetti fino ad ora, sarà implementato in futuro. L'obiettivo è dimostrare struttura, organizzazione del codice e interattività: questa è una base concreta su cui continuerò a costruire.");
}

//script per cambiare testo al pulsante
function updateButtonText(x) {
    const btn = document.getElementById("myBtn");
    if (x.matches) { // se la media query è valida
      btn.textContent = "ISCRIVITI";
    } else {
      btn.textContent = "ISCRIVITI SUBITO!";
    }
  }

  const x = window.matchMedia("(max-width: 900px)");
  updateButtonText(x); // chiamata iniziale
  x.addEventListener("change", () => updateButtonText(x)); // ascolta cambi dimensione


