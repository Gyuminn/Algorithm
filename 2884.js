const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function alarmHandler(line) {
    const input = line.split(' ');

    const hour = Number(input[0]);
    const min = Number(input[1]);

    if ( min - 45 >= 0) {
        console.log(hour, min - 45);
    } else if ( hour !== 0 && min - 45 < 0) {
        console.log(hour - 1, 60 + (min - 45));
    } else if ( hour === 0 && min - 45 < 0) {
        console.log(23, 60 + (min - 45));
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", alarmHandler);
rl.on("close", closeHandler);

