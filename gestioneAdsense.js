 function attivazioneAdSenseEAnagrafica() {
    const urlDestinazione = "successo.html";
    let giaReindirizzato = false;

    if (window.adsbygoogle) {
        console.log("AdSense rilevato, tentativo di interstitial...");
        
        // Timeout di sicurezza a 2500ms
        setTimeout(() => {
            if (!giaReindirizzato) {
                giaReindirizzato = true;
                console.log("Tempo scaduto. Reindirizzamento di sicurezza.");
                window.location.href = urlDestinazione;
            }
        }, 2500); 

        try {
            // SINTASSI UFFICIALE DI PRODUZIONE: Mette in coda sicura il comando
            window.adsbygoogle.push(() => {
                const adsbygoogle = window.adsbygoogle;
                if (adsbygoogle && typeof adsbygoogle.push === "function") {
                    adsbygoogle.push({
                        cmd: "navigateToPage",
                        url: urlDestinazione,
                       adtest: "on" 
                    });
                }
            });
        } catch (error) {
            console.error("Errore nell'esecuzione di AdSense:", error);
            if (!giaReindirizzato) {
                giaReindirizzato = true;
                window.location.href = urlDestinazione;
            }
        }
    } else {
        console.log("AdSense o bloccato da AdBlock. Reindirizzamento immediato.");
        window.location.href = urlDestinazione;
    }
}
