const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const tmp = Array.from({ length: M }, () => 0);
  const answer = [];
  const visited = Array.from({ length: N + 1 }, () => false);
  const DFS = (L) => {
    if (L === M) {
      // 얕은 배열 복사를 방지하기 위해 slice를 사용해야 한다.
      // 그렇지 않으면 마지막 답만 출력되게 됨.
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          tmp[L] = i;
          DFS(L + 1);
          visited[i] = false;
        }
      }
    }
  };

  DFS(0);
  console.log(answer.map((v) => v.join(" ")).join(`\n`));
  process.exit();
};
rl.on("line", lineHandler);
