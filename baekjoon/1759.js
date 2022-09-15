const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));
  const answer = [];

  if (input.length > 1) {
    const [L, C] = input[0].map((v) => +v);
    const strArr = input[1];
    strArr.sort();

    const DFS = (str, S) => {
      let length = str.length;
      if (length === L) {
        let cnt = 0;
        for (let i = 0; i < length; i++) {
          if (
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
          ) {
            cnt++;
          }
        }
        if (cnt >= 1 && L - cnt >= 2) {
          answer.push(str);
        }
      } else {
        for (let i = S; i < C; i++) {
          DFS(str + strArr[i], i + 1);
        }
      }
    };

    DFS("", 0);
    console.log(answer.join(`\n`));
    process.exit();
  }
};
rl.on("line", lineHandler);
