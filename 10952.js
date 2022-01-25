const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];
let result = '';
let i = 0;

function lineHandler(line) {
    input.push(line);
}

function sumHandler() {
    while(i <= input.length - 1) {
        let num1 = Number(input[i].split(' ')[0]);
        let num2 = Number(input[i].split(' ')[1]);

        if(num1 !== 0 & num2 !== 0){
            result += `${num1 + num2}\n`;
        } else {
            break;
        }
        i++;
    }
    console.log(result);
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", sumHandler);