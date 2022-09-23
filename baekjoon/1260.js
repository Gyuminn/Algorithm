const sol = (input) => {
  const [[N, M, V], ...relation] = input;

  const graph = Array.from(Array(N + 1), () => Array());

  const DFS_visited = Array.from({ length: N + 1 }, () => 0);
  const DFS_stack = [];

  const BFS_visited = Array.from({ length: N + 1 }, () => 0);
  const BFS_queue = [];

  // 인접 리스트 생성 및 오름차순 정렬
  for ([a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }
  graph.forEach((vertex) => vertex.sort((a, b) => a - b));

  const DFS = (v) => {
    DFS_visited[v] = 1;
    DFS_stack.push(v);

    for (let i = 0; i < graph[v].length; i++) {
      if (DFS_visited[graph[v][i]] === 0) {
        DFS(graph[v][i]);
      }
    }
  };

  const BFS = (v) => {
    BFS_visited[v] = 1;

    let queue = [];
    queue.push(v);

    while (queue.length) {
      let v = queue.shift();
      BFS_queue.push(v);

      graph[v].forEach((v) => {
        if (BFS_visited[v] === 0) {
          BFS_visited[v] = 1;
          queue.push(v);
        }
      });
    }
  };

  DFS(V);
  BFS(V);
  console.log(DFS_stack.join(" "));
  console.log(BFS_queue.join(" "));
};

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][1]) {
    sol(input);
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
