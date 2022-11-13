const sol = (input) => {
  const [[N], ...cases] = input;
  const answer = [];

  let visited = Array.from({ length: 10000 }, () => 0);
  let queue = [];

  const cmds = {
    D: function (num) {
      if (num * 2 > 9999) {
        return (num * 2) % 10000;
      }
      return num * 2;
    },

    S: function (num) {
      if (num - 1 == 0) {
        return 9999;
      }
      return num - 1;
    },

    L: function (num) {
      num = num.toString();
      return Number(num.slice(1) + num[0]);
    },

    R: function (num) {
      num = num.toString();
      return Number(num[num.length - 1] + num.slice(0, num.length - 1));
    },
  };

  const bfs = (test) => {
    const [A, B] = test;

    visited = Array.from({ length: 10000 }, () => 0);
    visited[A] = 1;

    queue = [];
    queue.push([A, ""]);

    while (queue.length) {
      const [translateNum, str] = queue.shift();

      if (translateNum == B) {
        answer.push(str);
        return;
      }

      for (let cmd in cmds) {
        const afterCmdNum = cmds[cmd](translateNum);
        if (visited[afterCmdNum]) continue;
        visited[afterCmdNum] = 1;
        queue.push([afterCmdNum, str + cmd]);
      }
    }
  };

  for (let test of cases) {
    bfs(test);
  }

  return answer.join(`\n`);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
