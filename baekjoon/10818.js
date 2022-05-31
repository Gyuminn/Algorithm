const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler(){
    const num = Number(input[0]);
    const numbers = input[1].split(' ').map(Number);

    let min = numbers[0];
    let max = numbers[0];

    for(let i = 0; i < num; i++){
        if(min > numbers[i+1]) {
            min = numbers[i+1];
        }

        if(max < numbers[i+1]) {
            max = numbers[i+1];
        }
    }

    console.log(min, max);
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);