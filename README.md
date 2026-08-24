# Carteggio - Messaggistica Privata Real-Time e Cifrata

Un'applicazione web e mobile incentrata sulla privacy assoluta, che evita l'invio di e-mail o registrazioni tradizionali. 

## 🚀 L 'applicazione si trova sul sito BRADCARTEGGIO.IT
Visita il sito ufficiale su GitHub Pages per leggere il funzionamento . 
👉 [Sito Web Carteggio](https://github.io)

## 🔒 Filosofia di Sicurezza e Crittografia
* **Dati raccolti e Finalità del trattamento:** L'applicazione non raccoglie dati personali identificativi diretti.
Per poter usufruire del servizio di messaggistica dell'Applicazione, all'utente viene richiesto di inserire il proprio indirizzo e-mail al solo scopo di generare un ID che identifica la casella virtuale univoca e anonima. L ID  viene memorizzatto sul localStorage del dispositivo . 


* **Crittografia End-to-End Logica:** I messaggi prima di essere cifrati vengono modificati con un algoritmo che modifica il loro contenuto quindi passati alla cifratura tramite (Tabella ASCII) .

* **Zero-Knowledge Cloud:** I messaggi risiedono temporaneamente su Firebase Firestore esclusivamente in forma cifrata. Nessuno (nemmeno l'amministratore del database) può leggerli in chiaro.
Un faro (snapshot) avvisa il destinatario che nella sua casella è stato depositato un messaggio.

* **Macchina a Stati Finiti nell'Interfaccia:** La lettura dei messaggi segue un flusso sequenziale rigido (Estrai ➡️ Decripta ➡️ Cancella).
* **Tabula Rasa:** Al termine della lettura, il database cloud viene ripulito e un ricaricamento hardware della pagina cancella ogni traccia dei testi dalla memoria RAM del telefono.

## 🛠️ Tecnologie Utilizzate
* HTML5 / CSS3 (Layout fluido con Media Queries per dispositivi mobili)
* JavaScript Vanilla (Logica asincrona e crittografia nativa). 
* Firebase Firestore (Sincronizzazione real-time tramite listener `onSnapshot`)
