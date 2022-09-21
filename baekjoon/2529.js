function sol(input) {
  let [[k], ...[signs]] = input;
  k = Number(k);
  const visited = Array.from({ length: 10 }, () => 0);
  let max = String(Number.MIN_SAFE_INTEGER);
  let min = String(Number.MAX_SAFE_INTEGER);

  const DFS = (L, prev, result) => {
    if (L === k) {
      max = result > max ? result : max;
      min = result < min ? result : min;
      return;
    }
    if (signs[L] === "<") {
      for (let i = prev + 1; i < 10; i++) {
        if (visited[i]) continue;
        visited[i] = 1;
        DFS(L + 1, i, result + i);
        visited[i] = 0;
      }
    } else {
      for (let i = prev - 1; i > -1; i--) {
        if (visited[i]) continue;
        visited[i] = 1;
        DFS(L + 1, i, result + i);
        visited[i] = 0;
      }
    }
    return;
  };

  for (let i = 0; i < 10; i++) {
    visited[i] = 1;
    DFS(0, i, `${i}`);
    visited[i] = 0;
  }

  return `${max}\n${min}`;
}

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 1) {
    console.log(sol(input));
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
