const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function leapYearHandler(line) {
    const year = Number(line);

    if ((year % 4) === 0 && (year % 100) !== 0) {
        console.log(1);
    } else if ((year % 400) === 0) {
        console.log(1);
    } else {
        console.log(0);
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on('line', leapYearHandler);
rl.on('close', closeHandler);