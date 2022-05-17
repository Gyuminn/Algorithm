const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const arr = line.split("");
  let all = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (i !== j) {
        str = str.concat(arr[j]);
      }
      all.push(str);
    }
  }

  const deDuplicated = new Set(all);
  console.log(deDuplicated.size);
  rl.close();
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
