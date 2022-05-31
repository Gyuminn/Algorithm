const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function cookHandler(line) {
  input.push(line);

  if (input.length >= 2) {
    const startTime = input[0].split(" ");

    const startHour = parseInt(startTime[0]);
    const startMinute = parseInt(startTime[1]);
    const cookingMinute = parseInt(input[1]);

    const quotient = parseInt((startMinute + cookingMinute) / 60);
    const remainder = (startMinute + cookingMinute) % 60;

    const cookEndHour = startHour + quotient;
    const cookEndMinute = remainder;

    console.log(
      cookEndHour >= 24 ? cookEndHour - 24 : cookEndHour,
      cookEndMinute
    );
    reader.close();
  }
}

function closeHandler() {
  process.exit();
}

reader.on("line", cookHandler);
reader.on("close", closeHandler);
