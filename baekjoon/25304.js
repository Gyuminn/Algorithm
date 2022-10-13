const sol = (input) => {
  const [X, N, ...relation] = input;

  let total = 0;

  for (let [a, b] of relation) {
    total += a * b;
  }

  return X === total ? "Yes" : "No";
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length < 2) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length > input[1] + 1) {
      console.log(sol(input));
      process.exit();
    }
  });
