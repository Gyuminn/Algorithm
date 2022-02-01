const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function lineHandler(line) {
    const upperStr = line.toUpperCase();
    let countArray = new Array(26).fill(0);

    for(let i = 0; i < upperStr.length; i++) {
        countArray[upperStr.charCodeAt(i) - 65] ++;
    }

    const max = Math.max(...countArray);
    const index = countArray.indexOf(max);

    let isSame = false;

    for(let i = 0; i < countArray.length; i++) {
        if(countArray[i] === max && index !== i) {
            isSame = true;
        }
    }

    if(isSame) {
        console.log("?");
    } else {
        console.log(String.fromCharCode(index + 65));
    }
    
    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);