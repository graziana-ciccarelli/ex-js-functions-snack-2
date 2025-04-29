function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const interval = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(interval);
    }, tempoStop);
}
eseguiEferma("Ciao, questo è un messaggio.", 1000, 5000); 
