const sol = (input) => {
  const [[N], ...relation] = input;

  const tree = Array.from(Array(N + 1), () => Array());
  let visited = Array.from({ length: N + 1 }, () => 0);

  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };

  relation.map((arr) => {
    const [parent, child, weight] = arr;
    tree[parent].push([child, weight]);
    tree[child].push([parent, weight]);
  });

  const DFS = (node, dist) => {
    visited[node] = 1;

    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of tree[node]) {
      if (visited[nextNode]) continue;
      DFS(nextNode, dist + nextDist);
    }
  };

  DFS(1, 0);
  max.dist = Number.MIN_SAFE_INTEGER;
  visited = Array.from({ length: N + 1 }, () => 0);

  DFS(max.node, 0);
  return max.dist;
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
