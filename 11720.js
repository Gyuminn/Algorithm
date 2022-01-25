const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler() {
    const num1 = Number(input[0]);
    numbers = input[1].split('').map(Number);
    let total = 0;

    for(let i = 0; i < num1; i++) {
        total += numbers[i];
    }

    console.log(total);
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);