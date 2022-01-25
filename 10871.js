const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let input = [];
let conditions = [];
let consequences = [];
let result = '';

function lineHandler(line) {
    input.push(line);
}

function sequenceHandler() {
    conditions.push(input[0].split(' '));
    const sequenceNum = Number(conditions[0][0]);
    const conditionNum = Number(conditions[0][1]);

    consequences.push(input[1].split(' '));

    for(let i = 0; i < sequenceNum; i++) {
        let consequence = Number(consequences[0][i]);

        if(consequence < conditionNum){
            result = result + consequence +' ';
        }
    }
    console.log(result);
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", sequenceHandler);