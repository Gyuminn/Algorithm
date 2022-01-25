const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler() {
    let num1 = parseInt(input[0]);
    let num2 = parseInt(input[1]);

    console.log(num1 * (num2 % 10)); //1의 자리 구해서 곱하기
    console.log(num1 * Math.floor((num2 % 100) / 10)); //10의 자리 구해서 곱하기
    console.log(num1 * Math.floor(num2 / 100)); //100의 자리 구해서 곱하기
    console.log(num1 * num2);

    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);