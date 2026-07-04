# Carteggio - Messaggistica Privata Real-Time e Criptata

Un'applicazione web e mobile incentrata sulla privacy assoluta, che evita l'uso di email o registrazioni tradizionali. I messaggi si autodistruggono immediatamente dopo la lettura sia dal cloud che dalla memoria del dispositivo.

## 🚀 Prova l'App e Scarica l'APK
Visita il sito ufficiale su GitHub Pages per leggere il funzionamento e scaricare l'applicazione:
👉 [Sito Web Carteggio](https://github.io)

## 🔒 Filosofia di Sicurezza e Crittografia
* **Crittografia End-to-End Logica:** I messaggi vengono convertiti a livello numerico (Tabella ASCII) e cifrati sul dispositivo del mittente attraverso un algoritmo simmetrico guidato da un flusso pseudo-casuale modificato prima dell'invio.
* **Zero-Knowledge Cloud:** I testi risiedono su Firebase Firestore esclusivamente in forma cifrata. Nessuno (nemmeno l'amministratore del database) può leggerli in chiaro.
* **Macchina a Stati Finiti nell'Interfaccia:** La lettura dei messaggi è protetta da un comando segreto (doppio clic su un indicatore nascosto `...`) per prevenire sguardi indiscreti. I pulsanti di azione seguono un flusso sequenziale rigido (Estrai ➡️ Decripta ➡️ Cancella).
* **Tabula Rasa:** Al termine della lettura, il database cloud viene ripulito e un ricaricamento hardware della pagina cancella ogni traccia dei testi dalla memoria RAM del telefono.

## 🛠️ Tecnologie Utilizzate
* HTML5 / CSS3 (Layout fluido con Media Queries per dispositivi mobili)
* JavaScript Vanilla (Logica asincrona e crittografia nativa)
* Firebase Firestore (Sincronizzazione real-time tramite listener `onSnapshot`)
