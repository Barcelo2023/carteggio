// Codice pulito che parte appena la pagina si carica
window.addEventListener('DOMContentLoaded', () => {
    // Inietta lo script principale di Google AdSense valido sia per PC che per Telefono
    const scriptAdSense = document.createElement('script');
    scriptAdSense.async = true;
    // Assegna l'URL corretto alla proprietà src
    scriptAdSense.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7064918153021324";
    scriptAdSense.crossOrigin = "anonymous";    
    document.head.appendChild(scriptAdSense);
    
    console.log("Google AdSense attivato globalmente per il sito web.");
});
