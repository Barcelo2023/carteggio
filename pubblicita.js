let interstitial;

// 1. Inizializza AdMob e avvia il pre-caricamento dell'annuncio
document.addEventListener('deviceready', async () => {
    if (typeof admob !== 'undefined') {
        try {
            await admob.start();
            
            interstitial = new admob.InterstitialAd({
                adUnitId: 'ca-app-pub-3940256099942544/1033173712' // ID di prova Android
                //      adUnitId: 'ca-app-pub-7064918153021324/2239653080'   originale
            });

            // Avvia il caricamento in background
            await interstitial.load();
            console.log("AdMob: Inizializzato e annuncio in caricamento...");
        } catch (errore) {
            console.error("AdMob: Errore durante l'inizializzazione", errore);
        }
    }
});

// 2. Gestore globale dell'evento di chiusura dell'annuncio
document.addEventListener('admob.interstitial.dismiss', () => {
    console.log("AdMob: Annuncio chiuso dall'utente. Vado alla pagina finale.");
    window.location.href = "pubbl.html";
});

// 3. Funzione da agganciare al click dei tuoi pulsanti di Scrittura/Lettura
async function mostraAnnuncioEVaiAvanti() {
    console.log("AdMob: Richiesta attivazione nel punto morto.");
    
    if (typeof admob !== 'undefined' && interstitial) {
        try {
            // Controlla se è pronto
            const pronto = await interstitial.isLoaded();
            
            if (pronto) {
                console.log("AdMob: Annuncio pronto! Lo mostro a schermo intero.");
                await interstitial.show();
                // NOTA: Non mettere window.location.href qui! 
                // Il cambio pagina avverrà automaticamente nell'evento 'dismiss' sopra quando l'utente clicca sulla "X".
            } else {
                // Se l'utente è stato fulmineo e l'annuncio non è ancora pronto, 
                // attendiamo un secondo extra per dargli un'ultima possibilità prima di saltare
                console.log("AdMob: Annuncio non ancora pronto, attendo un istante...");
                await new Promise(resolve => setTimeout(resolve, 1500)); 
                
                // Ricontrolla dopo la breve attesa
                if (await interstitial.isLoaded()) {
                    await interstitial.show();
                } else {
                    console.log("AdMob: Annuncio ancora non pronto, salto alla pagina finale.");
                    window.location.href = "pubbl.html";
                }
            }
        } catch (err) {
            console.error("AdMob: Errore durante la verifica o la mostra dell'annuncio", err);
            window.location.href = "pubbl.html";
        }
    } else {
        console.log("AdMob non disponibile, vado avanti.");
        window.location.href = "pubbl.html";
    }
}

  

 