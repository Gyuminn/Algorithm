const sol = (input) => {
  const [[N], ...triangle] = input;

  //triangle 자체를 dp로 사용
  //아래에서부터 위로 더해가는 방식으로 풀이

  for (let i = N - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      triangle[i - 1][j] =
        triangle[i - 1][j] + Math.max(triangle[i][j], triangle[i][j + 1]);
    }
  }

  return triangle[0][0];
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
      console.table(sol(input));
      process.exit();
    }
  });
