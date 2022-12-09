const sol = (input) => {
  const [cristals, bags] = input[0];
  const cristalInfo = input.slice(1, 1 + cristals);
  const bagInfo = input.slice(1 + cristals);

  cristalInfo.sort((a, b) => {
    return b[1] - a[1];
  });

  bagInfo.sort((a, b) => a - b);

  let answer = 0;
  let cnt = 0;

  return bagInfo;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(line.split(" ").map((v) => +v));
    } else if (input.length >= 1 && input.length <= input[0][0]) {
      input.push(line.split(" ").map((v) => +v));
    } else if (
      input.length > input[0][0] &&
      input.length <= input[0][0] + input[0][1]
    ) {
      input.push(+line);
    }

    if (input.length > input[0][0] + input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
