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
    const nums = input[1];
    nums.sort((a, b) => a - b);
    const visited = Array.from({ length: N }, () => 0);
    let tmp = Array.from({ length: M }, () => 0);
    let answer = [];

    const DFS = (L) => {
      if (L === M) {
        answer.push(tmp.slice());
      } else {
        for (let i = 0; i < N; i++) {
          if (visited[i] === 0) {
            visited[i] = 1;
            tmp[L] = nums[i];
            DFS(L + 1);
            visited[i] = 0;
          }
        }
      }
    };
    DFS(0);
    console.log(answer.map((v) => v.join(" ")).join(`\n`));
    process.exit();
  }
};
rl.on("line", lineHandler);
