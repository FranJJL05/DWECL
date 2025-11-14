const usoExec = () => {
    const regex = /\d{5}/g;
    const str = "cp 18800 cp 29300 cp 50000";
    let array;

    while ((array = regex.exec(str)) !== null) {
        console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}. Valor del array ${array}`);
        // Expected output: "Found foo. Next starts at 9."
        // Expected output: "Found foo. Next starts at 19."
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    usoExec();
});