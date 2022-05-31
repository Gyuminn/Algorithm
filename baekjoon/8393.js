const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})


function sumHandler(line) {
    const input = Number(line);
    let sum = 0;

    for(let i = 1; i <= input; i++) {
        sum = sum + i;
    }

    console.log(sum);

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", sumHandler);
rl.on("close", closeHandler);