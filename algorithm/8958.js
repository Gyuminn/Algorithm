const { builtinModules } = require("module");
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input = [];

function lineHandler(line) {
    input.push(line);
}

function closeHandler() {
    const num = Number(input[0]);

    for(let i = 0; i < num; i++){
        const answers = input[i+1].split('');
        let score = 0;
        let addGrade = 0;

        for(let j = 0; j < answers.length; j++) {
            if(answers[j] === "O") {
                score += 1+ addGrade;
                addGrade ++;
            } else {
                addGrade = 0;
            }
        }
        console.log(score);
    }
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);