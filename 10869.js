const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    outputL: process.stdout,
});


function caculateEvent(line) {
    const input = line.split(' ');

    const num1 = parseInt(input[0]);
    const num2 = parseInt(input[1]);

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(Math.floor(num1 / num2));
    console.log(num1 % num2);

    rl.close();
}

function closeEvent() {
    process.exit;
}

rl.on("line", caculateEvent);
rl.on("close", closeEvent);