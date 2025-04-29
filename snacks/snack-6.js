function creaContatoreAutomatico(interval){
    let contatore = 0;

    setInterval(()=>{
        contatore++;
        console.log(contatore);

    }, interval);
}
creaContatoreAutomatico(1000);