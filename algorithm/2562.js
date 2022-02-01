const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];

function lineHandler(line) {
    input.push(line);
}

function maxHandler() {
    const numbers = input.map(Number);
    let max = numbers[0];
    let maxIndex = 1;
    
    for(let i = 0; i < numbers.length; i++){
        if(max < numbers[i+1]){
            max = numbers[i+1];
            maxIndex = i+2;
        }
    }
    console.log(max);
    console.log(maxIndex);
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", maxHandler);