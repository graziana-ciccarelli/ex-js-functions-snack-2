function stampaOgniSecondo(messaggio){
    setInterval(()=>{
        console.log(messaggio);

    }, 1000);
}
stampaOgniSecondo("Ciao, questo è un messaggio")