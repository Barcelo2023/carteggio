
  (function() {
    // 1. Controlla la larghezza dello schermo (es. sotto i 768px)
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    // 2. Controlla se il dispositivo supporta il touch
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    
    // Se NON è un telefono, reindirizza l'utente altrove
    if (!isSmallScreen || !isTouchDevice) {
      document .getElementById("error").innerText = "dispositivo non autorizzato"; 
    }
  })();
