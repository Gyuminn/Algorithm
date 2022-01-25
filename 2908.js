const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function lineHandler(line) {
    const num1Array = line.split(' ')[0].split('');
    const num2Array = line.split(' ')[1].split('');

    const newNum1 = Number(num1Array.reverse().join(""));
    const newNum2 = Number(num2Array.reverse().join(""));

    if(newNum1 > newNum2){
        console.log(newNum1);
    } else{
        console.log(newNum2);
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);