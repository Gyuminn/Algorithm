const sol = (input) => {
  const [N, k] = input[0];
  const scores = input[1];

  scores.sort((a, b) => b - a);

  return scores[k - 1];
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > 1) {
      console.log(sol(input));
      process.exit();
    }
  });
