const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let numbers = [];
let answer = '';

function numberHandler(line) {
    const input = Number(line);

    for(let i = 1; i <= input; i++) {
        numbers.push(i);
        let num = Number(numbers[i-1]);
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