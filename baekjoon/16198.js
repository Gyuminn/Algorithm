const sol = (input) => {
  const [[N], ...[marbles]] = input;

  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (marbles, energy) => {
    if (marbles.length == 2) {
      max = Math.max(max, energy);
      return;
    }

    for (let i = 1; i < marbles.length - 1; i++) {
      const deletedMarbles = [...marbles.slice(0, i), ...marbles.slice(i + 1)];
      dfs(deletedMarbles, energy + marbles[i - 1] * marbles[i + 1]);
    }
  };

  dfs(marbles, 0);
  return max;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
