const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];

rl.on("line", (line) => {
  if (!count) {
    count = Number(line);
  } else {
    input.push(line);
    if (input.length == Number(input[0].split(" ")[1]) + 1) {
      main();
      input = [];
    }
  }
});

const main = () => {
  const graph = [];
  let answer = "YES";

  let n, m;

  input.forEach((el, i) => {
    const edge = el.split(" ").map(Number);
    if (i === 0) {
      [n, m] = edge;
      for (let i = 1; i <= n; i++) {
        graph[i] = [];
      }
    } else {
      const [from, to] = edge;
      graph[from].push(to);
      graph[to].push(from);
    }
  });

  const visited = new Array(n + 1).fill(0);
  const dfs = (start) => {
    const queue = [];
    queue.push(start);

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < graph[cur].length; i++) {
        const next = graph[cur][i];
        if (!visited[next]) {
          if (visited[cur] === 1) {
            visited[next] = 2;
          } else {
            visited[next] = 1;
          }
          queue.push(next);
        } else if (visited[cur] === visited[next]) {
          return;
        }
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i);
    }
  }

  let flag = false;
  loop1: for (let i = 1; i <= n; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (visited[i] === visited[graph[i][j]]) {
        console.log("NO");
        flag = true;
        break loop1;
      }
    }
  }
  if (!flag) {
    console.log(answer);
  }
};
