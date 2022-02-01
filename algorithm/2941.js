const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})


function lineHandler(line) {
    const input = line.split('');
    let count = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === "c" && (input[i+1] === "=" || input[i+1] === "-")) {
            count--;
        }else if (input[i] === "d" && (input[i+1] === "z" && input[i+2] === "=") || input[i+1] === "-") {
            count --;
        }else if ((input[i] === "l" || input[i] === "n") && input[i+1] === "j") {
            count --;
        }else if ((input[i] === "s" || input[i] === "z") && input[i+1] === "=") {
            count --;
        }
    }
    console.log(input.length + count);
    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);