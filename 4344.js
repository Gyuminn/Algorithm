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

    for(let i = 0; i < num; i++) {
        const nthArray = input[i+1].split(' ').map(Number);
        const studentNum = nthArray[0];

        let total = 0;
        let average = 0;
        let count = 0;
        let rate = 0;

        for(let j = 1; j < nthArray.length; j++){
            total += nthArray[j];
        }

        average = total / studentNum;

        for(let j = 1; j < nthArray.length; j++) {
            if(nthArray[j] > average) {
                count++;
            }
        }
        rate = count / studentNum * 100;
        console.log(`${rate.toFixed(3)}%`);
    }
    process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);