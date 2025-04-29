function creaContatoreAutomatico(interval) {
    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, interval);
    };
}
const avviaContatore = creaContatoreAutomatico(1000);
avviaContatore();
