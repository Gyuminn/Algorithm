const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];
let answer = '';

function lineHandler(line) {
    input.push(line);
}

function sumHandler(){
    const testCaseNum = Number(input[0]);
    let numbers = [];

    for(let i = 0; i < testCaseNum; i++) {
        numbers.push(input[i+1].split(' '));
    }

    for(let i = 0; i < testCaseNum; i++) {
       let num1 = Number(numbers[i][0]);
       let num2 = Number(numbers[i][1]);

       answer = `Case #${i+1}: ${num1} + ${num2} = ${num1 + num2}`;
       console.log(answer);
    }

    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", sumHandler);
