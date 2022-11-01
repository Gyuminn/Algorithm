const sol = (input) => {
  const [N, ...dists] = input;

  const arr = Array.from(Array(100), () => Array(100).fill(0));

  for (let i = 0; i < N; i++) {
    const [x, y] = dists[i];

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        arr[x + j][y + k] = 1;
      }
    }
  }

  const result = arr.reduce((prev, cur) => {
    for (let el of cur) {
      if (el) prev++;
    }
    return prev;
  }, 0);

  return result;
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
