const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function remainderHandler(line) {
    const input = line.split(' ');

    const num1 = parseInt(input[0]);
    const num2 = parseInt(input[1]);
    const num3 = parseInt(input[2]);

    console.log((num1 + num2) % num3);
    console.log(((num1 % num3) + (num2 % num3)) % num3);
    console.log((num1 * num2) % num3);
    console.log(((num1 % num3) * (num2 % num3)) % num3);

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", remainderHandler);
rl.on("close", closeHandler);