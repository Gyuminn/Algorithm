const sol = (input) => {
  let max = 0;
  let index = Array.from({ length: 2 });

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (max <= input[i][j]) {
        max = input[i][j];
        index[0] = i + 1;
        index[1] = j + 1;
      }
    }
  }
  console.log(max);
  console.log(index.join(" "));
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 9) {
      sol(input);
      process.exit();
    }
  });
