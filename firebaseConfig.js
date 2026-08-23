// firebaseConfig.js - UNICO PUNTO DI CONFIGURAZIONE

// 1. CORREZIONE FONDAMENTALE: Inseriti gli URL completi per evitare l'errore CORS
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
    import { getFirestore} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
    import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
     
    const firebaseConfig = {
    apiKey: "AIzaSyA_eM3aMEvqfDiQ5fPwkMPdpWh4SisVkAM",
    // Corretti i link sottostanti inserendo i tuoi dati completi del progetto 'comunicare-8b181'
    authDomain: "comunicare-8b181.firebaseapp.com",
    databaseURL: "https://comunicare-8b181-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "comunicare-8b181",
    storageBucket: "comunicare-8b181.firebasestorage.app",
    messagingSenderId: "789151969586",
    appId: "1:789151969586:web:553bd996e8c46c15c3e72b"
   };   

   // Inizializzazione unica
   const app = initializeApp(firebaseConfig);

   // Esportiamo l'istanza corretta del database
    export const db = getFirestore(app);
    export const auth = getAuth(app);


      //Routine per garantire che l'utente sia autenticato come anonimo.
      //Puoi richiamarla prima di fare qualsiasi operazione di scrittura sul database.
 
      export function ottieniUtentePronto() {
       return new Promise((resolve, reject) => {
      // onAuthStateChanged controlla se c'è già una sessione attiva
       onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Utente già autenticato");
     //   console.log("Utente già autenticato:", user.uid);
        resolve(user);
      } else {
        console.log("Nessun utente trovato. Creazione utente anonimo...");
        try {
          const userCredential = await signInAnonymously(auth);
          console.log("Nuovo utente anonimo creato");
      //    console.log("Nuovo utente anonimo creato:", userCredential.user.uid);
          resolve(userCredential.user);
        } catch (error) {
          console.error("Errore nel login anonimo:", error);
          reject(error);
        }
      }
    });
  });
}

