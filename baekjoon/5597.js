const sol = (input) => {
  const set = new Set(input);
  let answer = [];
  for (let i = 1; i <= 30; i++) {
    if (!set.has(i)) answer.push(i);
  }

  answer.sort((a, b) => a - b);
  return answer.join(`\n`);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(+line);

    if (input.length > 27) {
      console.log(sol(input));
      process.exit();
    }
  });
