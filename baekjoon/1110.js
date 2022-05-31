const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})


function cycleHandler(line) {
    let number = Number(line);
    let newNum = 0;
    let cycle = 0;
    
    let ones = Math.floor(number % 10);
    let tens = Math.floor(number / 10);
    
    for(let i = 0; ; i++) {
        newNum = ones * 10 + Math.floor((ones + tens) % 10);
        ones = Math.floor(newNum % 10);
        tens = Math.floor(newNum / 10);
        cycle++;
        
        if(number === newNum) {
            break;
        }
    }
    console.log(cycle);
    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", cycleHandler);
rl.on("close", closeHandler);