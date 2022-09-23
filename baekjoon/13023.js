const sol = (input) => {
  const [[N, M], ...relation] = input;
  const graph = Array.from(Array(N), () => Array(N).fill(0));
  const visited = Array.from({ length: N }, () => 0);
  let flag = 0;

  for ([a, b] of relation) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  // 스택이 풀리면서 visited를 초기화해주는 것이 중요하다.
  // 탐색이 다 끝난 다음에 한꺼번에 초기화하는 방식으로는 되지 않는다. (그렇게 하면 반례를 만난다.)
  // 그 이유는 1 -> 2-> 3 이 친구이고, 0과 2가 친구라고 가정하자.
  // 이 때 0이 2를 타고 1를 탐색하게 되면, 3은 탐색할 수가 없게 된다.

  const DFS = (v, cnt) => {
    visited[v] = 1;
    if (cnt === 4) {
      flag = 1;
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (graph[v][i] === 1 && visited[i] === 0) {
          DFS(i, cnt + 1);
        }
      }
    }
    visited[v] = 0;
  };

  //처음 방문 노드 선택
  for (let i = 0; i < N; i++) {
    DFS(i, 0);
  }
  return flag;
};

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][1]) {
    console.log(sol(input));

    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
