const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];

function lineHandler(line) {
    input.push(line);
}

function testCaseHandler() {
    let testCaseNum = Number(input[0]);
    let numbers = [];

    for (let i = 0; i < testCaseNum; i++) {
        numbers.push(input[i+1].split(' '));
    }

    for(let i = 0; i < testCaseNum; i++) {
        num1 = Number(numbers[i][0]);
        num2 = Number(numbers[i][1]);

        console.log(num1 + num2);
    }

    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", testCaseHandler);