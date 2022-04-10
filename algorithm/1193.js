const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = Number(line);

  let i = 1;
  let sum = 1;

  while (sum < input) {
    sum += i + 1;
    i++;
  }

  if (i % 2 === 0) {
    console.log(
      `${i - (sum - input)}/${sum - input === 0 ? 1 : sum - input + 1}`
    );
  } else {
    console.log(
      `${sum - input === 0 ? 1 : sum - input + 1}/${i - (sum - input)}`
    );
  }

  rl.close();
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
