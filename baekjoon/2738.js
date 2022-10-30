const sol = (input) => {
  const [N, M] = input[0];

  const result = Array.from(Array(N), () => Array(M));

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < M; j++) {
      result[i - 1][j] = input[i][j] + input[i + N][j];
    }
  }

  return result.map((arr) => arr.join(" ")).join(`\n`);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0] * 2) {
      console.log(sol(input));
      process.exit();
    }
  });
