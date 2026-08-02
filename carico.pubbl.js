let interstitialAdmob; // Variabile globale per AdMob

// Funzione per verificare se è un telefono
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 
           (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
}

// Codice che parte appena la pagina si carica
window.addEventListener('DOMContentLoaded', () => {
    if (isMobileDevice()) {
        // --- SEZIONE TELEFONO (Pre-carica AdMob) ---
        document.addEventListener('deviceready', async () => {
            if (typeof admob !== 'undefined') {
                try {
                    await admob.start();
                    interstitialAdmob = new admob.InterstitialAd({
                        adUnitId: 'ca-app-pub-3940256099942544/1033173712' // ID di prova
                    });
                    await interstitialAdmob.load(); // Scarica in background
                    console.log("AdMob pre-caricato.");
                } catch (e) { console.error(e); }
            }
        });

        // Ascolta la chiusura di AdMob per andare al successo mobile
        document.addEventListener('admob.interstitial.dismiss', () => {
            window.location.href = "successo_mob.html";
        });

    } else {
        // --- SEZIONE PC (Inietta lo script AdSense nell'head) ---
        const scriptAdSense = document.createElement('script');
        scriptAdSense.async = true;
        scriptAdSense.src = "https://googlesyndication.com";
        scriptAdSense.crossOrigin = "anonymous";
        document.head.appendChild(scriptAdSense);
        console.log("AdSense iniettato per il PC.");
    }
});
