const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function lineHandler(line){
    const num = Number(line);
    let count = 0;

    for(let i = 1; i <= num; i++) {
        const units = String(i).split('').map(Number);
        
        if(units.length <= 2) {
            count++;
        } else if(units[0] - units[1] === units[1] - units[2]) {
            count++;
        }
    }
    console.log(count);
    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);