async function hashEmail(email) {
  const emailPulita = String(email).replace(/\s+/g, '').toLowerCase();             
  const emailModificata= btoa(String.fromCodePoint(...new TextEncoder().encode(emailPulita)));                 
  
  const msgBuffer = new TextEncoder().encode(emailModificata);                    

  // 2. Genera l'hash SHA-256 (restituisce un ArrayBuffer)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // 3. Converte l'ArrayBuffer in una stringa esadecimale leggibile
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     
  const chiave = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
   
  return chiave;
}