function sol(input) {
  const [N, ...relation] = input;

  const tree = Array.from({ length: N + 1 }, () => new Array());
  const findRoot = Array.from({ length: N + 1 }, () => 0);

  relation.map((v) => {
    const [node, left, right] = v;
    findRoot[node]++;
    tree[node] = [left, right];
    findRoot[left]++;
    findRoot[right]++;
  });

  const rootNode = findRoot.indexOf(1);
  const rows = Array.from({ length: N + 1 }, () => new Array());
  let column = 1;

  function DFS(L, node) {
    const [lt, rt] = tree[node];
    if (lt !== -1) {
      DFS(L + 1, lt);
    }
    rows[L].push(column++);
    if (rt !== -1) {
      DFS(L + 1, rt);
    }
  }

  DFS(1, rootNode);

  let max = [0, 0];
  rows.map((row, level) => {
    if (!row.length) return;
    const width = Math.max(...row) - Math.min(...row) + 1;
    if (width > max[1]) {
      max = [level, width];
    }
  });

  return max.join(" ");
}

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length > input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
