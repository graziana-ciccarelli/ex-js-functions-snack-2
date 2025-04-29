function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const interval = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(interval);
    }, tempoStop);
}
eseguiEferma("Sto eseguendo : Hello world.", 1000, 5000); 
