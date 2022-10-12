const sol = (input) => {
  const [[N], ...relation] = input;
  const tree = Array.from(Array(N + 1), () => Array());

  let visited = Array.from({ length: N + 1 }, () => 0);

  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };

  relation.map((arr) => {
    const [node, ...nextInfo] = arr;
    for (let i = 0; i < nextInfo.length - 1; i += 2) {
      tree[node].push([nextInfo[i], nextInfo[i + 1]]);
    }
  });

  const DFS = (node, dist) => {
    visited[node] = 1;

    // 최대 거리일 경우 노드와 거리 업데이트
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

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
