const sol = (input) => {
  const N = input[0];
  const A = input[1];
  const B = input[2];

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += A[i] * B[i];
  }
  return sum;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (!input.length) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length === 3) {
      console.log(sol(input));
      process.exit();
    }
  });
