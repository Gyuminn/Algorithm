const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler() {
    const numbers = input.map(Number);
    let multiply = 1;

    for(let i = 0; i < numbers.length; i++){
        multiply *=  numbers[i];
    }

    result = String(multiply);
    
    for(let i = 0; i < 10; i++){
        let count = 0;

        for(let j = 0; j < result.length; j++){
            if(i === Number(result[j])){
                count++;
            }
        }
        console.log(count);
    }
    process.exit();
}
rl.on("line",lineHandler);
rl.on("close",closeHandler);