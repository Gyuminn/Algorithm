const sol = (input) => {
  const [K, ...board] = input;

  let smallSquareArea = 1;
  let bigSquareArea = 1;

  let dir = Array.from({ length: 5 }, () => 0);
  for (let i = 0; i < 6; i++) {
    dir[board[i][0]] += 1;
  }

  for (let i = 0; i < 6; i++) {
    if (dir[board[i][0]] === 1) {
      bigSquareArea *= board[i][1];
      continue;
    }

    const standard = (i + 1) % 6;
    const nextStandard = (i + 2) % 6;

    if (board[i][0] === board[nextStandard][0])
      smallSquareArea *= board[standard][1];
  }
  return (bigSquareArea - smallSquareArea) * K;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length === 7) {
      console.log(sol(input));
      process.exit();
    }
  });
