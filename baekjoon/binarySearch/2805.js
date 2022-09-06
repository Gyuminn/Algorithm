const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const [N, M] = input[0];
    const trees = input[1];
    let min = 0;
    let max = Math.max(...trees);
    let mid = 0;
    let answer = 0;

    while (min <= max) {
      let allTreeLen = 0;
      mid = parseInt((min + max) / 2);
      trees.forEach((tree) => {
        let treeLen = tree - mid;
        if (treeLen > 0) allTreeLen += treeLen;
      });

      if (allTreeLen >= M) {
        if (mid > answer) answer = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    console.log(answer);
    process.exit();
  }
};
rl.on("line", lineHandler);
