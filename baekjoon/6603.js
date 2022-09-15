const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input[input.length - 1][0] === 0) {
    input.pop();
    const answer = [];
    const M = 6;

    const DFS = (L, S, arr, tmp) => {
      if (L === M) {
        answer.push(tmp.slice());
      } else {
        for (let i = S; i < arr.length; i++) {
          tmp[L] = arr[i];
          DFS(L + 1, i + 1, arr, tmp);
        }
      }
    };

    input.forEach((arr) => {
      arr.shift();
      const tmp = Array.from({ length: M }, () => 0);
      DFS(0, 0, arr, tmp);
      answer.push([]);
    });

    console.log(
      answer
        .map((v) => v.join(" "))
        .join(`\n`)
        .trim()
    );
    process.exit();
  }
};
rl.on("line", lineHandler);
