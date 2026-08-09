//
//
        function caricodata() {  
            const data = new Date();
     const anno = data.getFullYear();
     const mese = String(data.getMonth() + 1).padStart(2, '0');
     const giorno = String(data.getDate()).padStart(2, '0');
     const ore = String(data.getHours()).padStart(2, '0');
     const minuti = String(data.getMinutes()).padStart(2, '0');
     
      document.getElementById('datetime').textContent =  `${anno}.${mese}.${giorno}    ${ore}:${minuti}`;

        }