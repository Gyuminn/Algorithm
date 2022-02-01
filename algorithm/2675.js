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
    const caseNum = Number(input[0]);

    for(let i = 1; i <= caseNum; i ++) {
        const iteration = Number(input[i].split(' ')[0]);
        const str = input[i].split(' ')[1];

        strArray = str.split('');

        let newString = '';

        for(let j = 0; j < strArray.length; j++) {
            const addString = strArray[j];
            
            for(let k =0; k < iteration; k ++) {
                newString += addString;
            }

        }

        console.log(newString);
    }

    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);

