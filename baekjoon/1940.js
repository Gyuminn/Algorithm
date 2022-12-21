const sol = (input) => {
  const [N] = input[0];
  const [M] = input[1];
  const source = input[2];

  source.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = source.length - 1;
  let answer = 0;

  while (p1 < p2) {
    const a = source[p1];
    const b = source[p2];

    if (a + b > M) {
      p2--;
      continue;
    }

    if (a + b === M) {
      answer++;
      p1++;
      p2--;
      continue;
    }

    p1++;
  }

  return answer;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 3) {
      console.log(sol(input));
      process.exit();
    }
  });
