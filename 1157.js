const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function lineHandler(line) {
    const str = line.toUpperCase();
    
    strArray = str.split('').sort();
    let count = 1;
    let maxString = strArray[0];
    
    let stringOrder = [];
    let stringCount = [];
    let stringCountOrder = [];

    for(let i = 0; i < strArray.length; i ++) {
        if(maxString === strArray[i+1]) {
            count++;
        }

        if(maxString !== strArray[i+1]) {
            stringOrder.push(maxString);
            stringCount.push(count);
            stringCountOrder.push(count);
            maxString = strArray[i+1];
            count = 1;
        }
    }

    stringCountOrder = stringCountOrder.sort();
    if(stringCountOrder[stringCountOrder.length - 1] === stringCountOrder[stringCountOrder.length - 2]) {
        console.log("?");
    } else {
        console.log(stringOrder[stringCount.indexOf(Math.max(...stringCount))]);
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line",lineHandler);
rl.on("close", closeHandler);