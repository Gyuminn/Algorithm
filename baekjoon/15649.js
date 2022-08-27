const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  solution(N, M, 0, 0, "");
  rl.close();
};

const solution = (N, M, count, used, val) => {
  const arr = [];

  for (let i = 1; i <= N; i++) {
    arr.push(String(i));
  }

  if (count == M) {
    console.log(val);
    return false;
  } else {
    for (let i = 0; i < N; i++) {
      if (used & (1 << i)) continue;
      solution(N, M, count + 1, used | (1 << i), val + arr[i] + " ");
    }
  }
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
