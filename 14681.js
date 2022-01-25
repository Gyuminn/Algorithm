const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input = [];

function quadrantHandler(line) {
    input.push(line);
}

function closeHandler() {
    const numX = Number(input[0]);
    const numY = Number(input[1]);

    if ( numX > 0 && numY > 0) {
        console.log(1);
    } else if ( numX < 0 && numY > 0) {
        console.log(2);
    } else if ( numX < 0 && numY < 0) {
        console.log(3);
    } else if ( numX > 0 && numY < 0) {
        console.log(4);
    }

    process.exit();
}

rl.on("line", quadrantHandler);
rl.on("close", closeHandler);