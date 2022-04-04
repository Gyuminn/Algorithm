const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader
  .on("line", function (line) {
    console.log(`${line}??!`);

    reader.close();
  })
  .on("close", function () {
    process.exit();
  });
