function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    };
}
const timer = creaTimer(3000); 
timer();
