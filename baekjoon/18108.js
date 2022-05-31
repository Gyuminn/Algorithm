const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader
  .on("line", function (line) {
    const input = line;

    const year = Number(input);
    console.log(year - 543);

    reader.close();
  })
  .on("close", function () {
    process.exit();
  });
