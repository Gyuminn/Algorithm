const sol = (input) => {
  const [[N], ...houses] = input;

  const board = Array.from(Array(N + 1), () => Array(3));

  for (let i = 0; i < N; i++) {
    const [r, g, b] = houses[i];
    board[i + 1][0] = r;
    board[i + 1][1] = g;
    board[i + 1][2] = b;
  }

  const memo = Array.from(Array(1001), () => Array(3));

  memo[1][0] = board[1][0];
  memo[1][1] = board[1][1];
  memo[1][2] = board[1][2];

  for (let i = 2; i <= N; i++) {
    memo[i][0] = Math.min(memo[i - 1][1], memo[i - 1][2]) + board[i][0];
    memo[i][1] = Math.min(memo[i - 1][0], memo[i - 1][2]) + board[i][1];
    memo[i][2] = Math.min(memo[i - 1][0], memo[i - 1][1]) + board[i][2];
  }

  return Math.min(...memo[N]);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
