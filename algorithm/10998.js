const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function lineEvent(line) {
    const input = line.split(' ');
    const output = parseInt(input[0]) * parseInt(input[1]);
    console.log(output);

    rl.close();
}

function closeEvent() {
    process.exit();
}

rl.on("line", lineEvent);
rl.on("close", closeEvent);