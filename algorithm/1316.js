const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
let countGroupWord = 0;

function lineHandler(line) {
  count++;
  input.push(line);
  const number = Number(input[0]);

  if (count === number + 1) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 1; i < count; i++) {
    const strArray = input[i].split("");
    let groupWordChecker = [];
    let isGroupWord = true;

    for (let j = 0; j < strArray.length; j++) {
      if (groupWordChecker.indexOf(strArray[j]) === -1) {
        // 해당 문자가 없는 경우에는 그냥 push
        groupWordChecker.push(strArray[j]);
      } else {
        // 만약 이미 나왔던 문자인데, 마지막 인덱스가 아닌 경우
        if (
          groupWordChecker.indexOf(strArray[j]) !==
          groupWordChecker.length - 1
        ) {
          isGroupWord = false;
          break;
        }
      }
    }

    if (isGroupWord) {
      countGroupWord++;
    }
  }
  console.log(countGroupWord);
  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
