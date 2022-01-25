const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];
let resids = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler() {
    const numbers = input.map(Number);

    numbers.forEach(x => {
        const resid = x % 42;

        if (resids.indexOf(resid) === -1){
            resids.push(resid);
        }
    });
    
    console.log(resids.length);
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);