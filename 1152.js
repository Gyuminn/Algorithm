const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})


function lineHandler(line) {
    const inputs = line.split(' ');

    const result = inputs.filter(input => input !== '');

    console.log(result.length);
    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);