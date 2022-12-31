const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

function lineHandler(line) {
  input.push(line);
  count++;

  const testNum = Number(input[0]);

  if (count > 2 * testNum) {
    rl.close();
  }
}

function closeHandler() {
  for (i = 1; i < input.length; i = i + 2) {
    const floor = Number(input[i]);
    const room = Number(input[i + 1]);

    const apartment = createArray(floor + 1, room);

    for (let i = 0; i <= floor; i++) {
      apartment[i][0] = 1;
    }

    for (let i = 0; i < room; i++) {
      apartment[0][i] = i + 1;
    }
    console.table(apartment);

    for (let i = 1; i <= floor; i++) {
      for (let j = 1; j < room; j++) {
        apartment[i][j] = apartment[i - 1][j] + apartment[i][j - 1];
      }
    }
    // console.table(apartment);
    console.table(apartment[floor][room - 1]);
  }

  process.exit();
}

function createArray(rows, columns) {
  // 2차원 배열을 만드는 방법!
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
