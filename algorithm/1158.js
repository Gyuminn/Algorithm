const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = [];

const lineHandler = (line) => {
  const [n, k] = line.split(" ").map((element) => Number(element));
  let arr = [];
  let answer = "<";

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (arr.length) {
    for (let i = 0; i < k; i++) {
      arr.push(arr.shift());
    }

    if (arr.length === 1) {
      answer += `${arr.pop()}>`;
    } else {
      answer += `${arr.pop()}, `;
    }
  }
  console.log(answer);
  rl.close();
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
