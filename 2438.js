const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function starHandler(line) {
    const starNum = Number(line);
    let star = Array(starNum)

    for(let i = 0; i < star.length; i++) {
        star[i] = '*';
        console.log(star.join(''));
    }

    rl.close();
}

function closeHandler() {
    process.exit();
}

rl.on("line", starHandler);
rl.on("close", closeHandler);