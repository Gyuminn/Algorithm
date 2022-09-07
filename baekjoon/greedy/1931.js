const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    input.shift();
    const lists = input;
    lists.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
    let cnt = 1;
    let ep = lists[0][1];

    for (let i = 1; i < lists.length; i++) {
      if (lists[i][0] < ep) {
        continue;
      } else {
        ep = lists[i][1];
        cnt++;
      }
    }
    console.log(cnt);
    process.exit();
  }
};

rl.on("line", lineHandler);
