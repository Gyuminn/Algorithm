const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function greaterThanHandler(line) {
    const input = line.split(' ');

    const num1 = parseInt(input[0]);
    const num2 = parseInt(input[1]);

    if (num1 > num2) {
        console.log(">");
    } else if (num1 < num2) {
        console.log("<");
    } else {
        console.log("==");
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", greaterThanHandler);
rl.on("close", closeHandler);