const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  outputP: process.stdout,
});

const lineHandler = (line) => {
  const str = line;
  let temp = "",
    isTag = false,
    ans = "";

  for (let i of str) {
    if (i === "<") {
      isTag = true;
      ans += temp.split("").reverse().join("") + i;
      temp = "";
    } else if (i === ">") {
      isTag = false;
      ans += temp + i;
      temp = "";
    } else if (i === " ") {
      ans += (!isTag ? temp.split("").reverse().join("") : temp) + " ";
      temp = "";
    } else {
      temp += i;
    }
  }
  console.log(ans + temp.split("").reverse().join(""));
  rl.close();
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
