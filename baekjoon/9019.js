const sol = (input) => {
  const [[N], ...cases] = input;
  const answer = [];

  const cmds = {
    D: function (num) {
      return (num * 2) % 10000;
    },

    S: function (num) {
      return num == 0 ? 9999 : num - 1;
    },

    L: function (num) {
      return (num % 1000) * 10 + Math.floor(num / 1000);
    },

    R: function (num) {
      return (num % 10) * 1000 + Math.floor(num / 10);
    },
  };

  const bfs = (test) => {
    const [A, B] = test;

    let visited = Array.from({ length: 10000 }, () => 0);
    visited[A] = 1;

    let queue = [];
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
