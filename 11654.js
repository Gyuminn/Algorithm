const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function lineHandler(line) {
    console.log(line.charCodeAt());
    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);