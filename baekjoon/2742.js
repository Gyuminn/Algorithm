const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let numbers = [];
let answer = '';

function numberHandler(line) {
    const input = Number(line);

    for(let i = input; i > 0 ; i--) {
        numbers.push(i);
    }

    for(let i = 0; i < input; i++) {
        let num = Number(numbers[i]);
        answer = answer + num + '\n';
    }

    console.log(answer);
    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", numberHandler);
rl.on("close", closeHandler);