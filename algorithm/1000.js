const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader
  .on("line", function (line) {
    const input = line.split(" ");

    const result = Number(input[0]) + Number(input[1]);
    console.log(result);

    reader.close();
  })
  .on("close", function () {
    process.exit();
  });
