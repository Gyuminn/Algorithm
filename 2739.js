const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function multiplicationTable(line) {
    const num = Number(line);
    
    for(let i = 1; i < 10; i ++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", multiplicationTable);
rl.on("close", closeHandler);