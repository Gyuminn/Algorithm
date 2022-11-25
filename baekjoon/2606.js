const sol = (input) => {
  const [computers, pairs, ...info] = input;

  const graph = Array.from(Array(computers + 1), () => Array());
  const visited = Array.from({ length: computers + 1 }, () => 0);

  for (let [a, b] of info) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let cnt = 0;

  const bfs = (s) => {
    const queue = [];
    queue.push(s);
    visited[s] = 1;

    while (queue.length) {
      const computer = queue.shift();

      for (let i = 0; i < graph[computer].length; i++) {
        if (visited[graph[computer][i]]) continue;
        visited[graph[computer][i]] = 1;
        cnt++;
        queue.push(graph[computer][i]);
      }
    }
  };

  bfs(1);
  return cnt;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length < 2) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length > input[1] + 1) {
      console.log(sol(input));
      process.exit();
    }
  });
