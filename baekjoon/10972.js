const readine = require("readline");

const rl = readine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const N = input[0][0];
    const arr = input[1];

    if (N === 1) {
      console.log(-1);
    } else {
      for (let i = N - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
          let j = N - 1;
          while (arr[i] > arr[j]) {
            j--;
          }
          [arr[i], arr[j]] = [arr[j], arr[i]];
          const leftArr = arr.slice(0, i + 1);
          const rightArr = arr.slice(i + 1).sort((a, b) => a - b);
          const answer = [...leftArr, ...rightArr];
          console.log(...answer);
          break;
        } else if (i === 0) {
          console.log(-1);
        }
      }
    }

    process.exit();
  }
};

rl.on("line", lineHandler);
