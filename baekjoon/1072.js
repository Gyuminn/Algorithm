const sol = (input) => {
  const [total, win] = input;

  const winRate = Math.floor((100 * win) / total);

  if (winRate >= 99) return -1;

  let min = 0;
  let max = 1000000000;
  let mid;
  let answer;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let tempWinRate = Math.floor((100 * (win + mid)) / (total + mid));

    if (tempWinRate > winRate) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    console.log(sol(line.split(" ").map((v) => +v)));
    process.exit();
  });
