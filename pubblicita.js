let interstitial;

// 1. Non appena l'app è pronta sul telefono, inizializza AdMob e carica l'annuncio
document.addEventListener('deviceready', async () => {
    if (typeof admob !== 'undefined') {
        try {
            await admob.start();
            
            // Crea l'oggetto dell'annuncio (Usa il tuo ID reale con lo slash "/")
            interstitial = new admob.InterstitialAd({
        //      adUnitId: 'ca-app-pub-7064918153021324/2239653080'   originale
                adUnitId: 'ca-app-pub-3940256099942544/1033173712'

            });

            // Carica l'annuncio in background per averlo pronto nel punto morto
            await interstitial.load();
            console.log("AdMob: Inizializzato e annuncio in caricamento...");
        } catch (errore) {
            console.error("AdMob: Errore durante l'inizializzazione", errore);
        }
    }
});

// 2. Questa è la funzione unica che richiamerai alla fine dei tuoi bottoni
async function mostraAnnuncioEVaiAvanti() {
    console.log("AdMob: Richiesta attivazione nel punto morto.");
    
    // Controlla se l'annuncio è stato caricato con successo
    if (typeof admob !== 'undefined' && interstitial && await interstitial.isLoaded()) {
        await interstitial.show(); // Mostra l'annuncio a schermo intero
    } else {
        // Se l'annuncio non è pronto, passa subito alla pagina finale per non bloccare l'utente
        console.log("AdMob: Annuncio non pronto, salto alla pagina finale.");
        window.location.href = "pubbl.html";
    }
}

// 3. Gestore dell'evento di chiusura: quando l'utente clicca sulla "X", va alla pagina finale
document.addEventListener('admob.interstitial.dismiss', () => {
    console.log("AdMob: Annuncio chiuso dall'utente.");
    window.location.href = "pubbl.html";
});
