const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function gradeHandler(line) {
    const grade = parseInt(line);

    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else if (grade >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }

    rl.close();
}


function closeHandler() {
    process.exit();
}
rl.on('line', gradeHandler);
rl.on('close', closeHandler);