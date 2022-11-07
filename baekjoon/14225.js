const sol = (input) => {
  const [[N], ...S] = input;
  S.sort((a, b) => a - b);

  const dfs = (L) => {
    if (L === N) {
      return;
    } else {
    }
  };
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
