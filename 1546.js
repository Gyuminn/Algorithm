    const readline = require("readline");

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
    })

    let input = [];
    let newGrades = [];

    function lineHandler(line) {
        input.push(line);
    }

    function closeHandler() {
        const num = Number(input[0]);
        const grades = input[1].split(' ').map(Number);

        let max = 0;
        let newTotal = 0;
        
        for(let i = 0; i < grades.length; i++){
            if(max < grades[i]){
                max = grades[i];
            }
        }

        for(let i = 0; i< grades.length; i++) {
            newTotal += grades[i] / max * 100;
        }

        console.log(newTotal / num);
        process.exit();
    }
    rl.on("line", lineHandler);
    rl.on("close", closeHandler);