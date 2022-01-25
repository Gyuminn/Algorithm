const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function lineHandler(line) {
    const randomString = line.split('');
    let total = '';
    
    for(let i = 97; i < 123; i++) {
        const alphabetNum = i;
        let count = 0;

        for(let j = 0; j < randomString.length; j++) {
            if( alphabetNum === randomString[j].charCodeAt()) {
                total += `${j} `;
                break;
            } else {
                count++;
            }
        }

        if(count === randomString.length) {
            total += `-1 `;
        }
    }
    console.log(total);
    rl.close();
}

function closeHandler() {
    process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);