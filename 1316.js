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
    const num = Number(input[0]);
    let count = 0;

    for(let i = 1; i < input.length; i++) {
        const string = input[i].split('');
        
        for(let j = 0; j < string.length; j++) {
            for(let k = j+2; k < string.length; k ++) {
                if((string[j] !== string[j+1]) 3&& (string[j] === string[k])) {
                    count --;
                    break;
                }
            } break;
        }
    }
    console.log(num + count);
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);