const input = [];

const sol = (input) => {
  const A = input[1];
  const B = input[2];

  const AB = [...A, ...B].sort((a, b) => a - b);

  return AB.join(" ");
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 3) {
      console.log(sol(input));
      process.exit();
    }
  });
