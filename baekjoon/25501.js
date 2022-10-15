const sol = (input) => {
  const [T, ...cases] = input;
  const answer = [];
  let cnt = 0;

  const recursion = (str, lt, rt, tmp) => {
    cnt++;
    if (lt >= rt) {
      tmp.push(1);
      tmp.push(cnt);
      answer.push(tmp);
      cnt = 0;
      tmp = [];
      return;
    } else if (str[lt] != str[rt]) {
      tmp.push(0);
      tmp.push(cnt);
      answer.push(tmp);
      cnt = 0;
      tmp = [];
      return;
    } else {
      recursion(str, lt + 1, rt - 1, tmp);
    }
  };

  cases.forEach((str) => {
    let tmp = [];
    recursion(str, 0, str.length - 1, tmp);
  });

  return answer.map((v) => v.join(" ")).join(`\n`);
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line);

    if (input.length > +input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
