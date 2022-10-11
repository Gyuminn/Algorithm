const sol = (input) => {
  const [[N], ...relation] = input;

  const graph = Array.from({ length: N + 1 }, () => Array());
  const parent = Array.from({ length: N + 1 }, () => 0);

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const BFS = () => {
    const queue = [];
    queue.push(1);
    parent[1] = 1;

    while (queue.length) {
      const v = queue.shift();

      for (let i = 0; i < graph[v].length; i++) {
        const nv = graph[v][i];

        if (parent[nv] === 0) {
          parent[nv] = v;
          queue.push(nv);
        }
      }
    }
  };

  BFS();
  const answer = parent.slice(2);

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

    if (input.length > input[0][0] - 1) {
      console.log(sol(input));
      process.exit();
    }
  });
