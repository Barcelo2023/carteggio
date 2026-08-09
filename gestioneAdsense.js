// Funzione isolata per gestire il passaggio pubblicitario
function attivazioneAdSenseEAnagrafica() {
    const urlDestinazione = "successo.html";
    let giaReindirizzato = false;

    if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
        console.log("AdSense rilevato, tentativo di interstitial...");
        
        // AUMENTATO A 2500ms: dà il tempo reale ad AdSense di rispondere senza andare in conflitto
        setTimeout(() => {
            if (!giaReindirizzato) {
                giaReindirizzato = true;
                console.log("Tempo scaduto. AdSense non ha risposto in tempo o ha ignorato l'annuncio. Reindirizzamento automatico.");
                window.location.href = urlDestinazione;
            }
        }, 2500); 

        try {
            window.adsbygoogle.push({
                cmd: "navigateToPage",
                url: urlDestinazione
            });
        } catch (error) {
            console.error("Errore nell'esecuzione di AdSense:", error);
            if (!giaReindirizzato) {
                giaReindirizzato = true;
                window.location.href = urlDestinazione;
            }
        }
    } else {
        console.log("AdSense non rilevato, disattivato o bloccato da AdBlock. Reindirizzamento immediato.");
        window.location.href = urlDestinazione;
    }
}
