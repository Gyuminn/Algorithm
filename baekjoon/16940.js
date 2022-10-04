const sol = (input) => {
  const N = input[0][0];
  const order = input[input.length - 1];
  input.shift();
  input.pop();
  const relation = input;

  const graph = Array.from(Array(N + 1), () => Array());
  const visited = Array.from({ length: N + 1 }, () => 0);
  const parent = Array.from({ length: N + 1 }, () => 0);

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const test = () => {
    const queue = [];
    queue.push(1);
    visited[1] = 1;

    let idx = 0;

    // order를 모두 살피기
    for (let i = 0; i < N; i++) {
      // 다 살펴보지 않았는데 큐가 없다면 불가능.
      if (queue.length === 0) {
        return 0;
      }

      // 큐에서 뽑은 값이 현재 order에 맞지 않다면 불가능.
      const v = queue.shift();
      if (v !== order[i]) {
        return 0;
      }

      // nv의 수를 센 다음, 부모 정점으로 저장.
      let cnt = 0; // nv(연결된 정점)의 개수를 저장하는 변수
      for (let nv of graph[v]) {
        if (visited[nv] === 0) {
          parent[nv] = v;
          cnt++;
        }
      }

      // 현재 index(order 배열의)부터 cnt(nv의 개수)만큼 index를 검사하여 다음 탐색할 정점을 찾는다.
      for (let j = 1; j <= cnt; j++) {
        // N을 넘어가거나, 부모가 현재 정점이 아닐 경우 다음 순서에 있다면 불가능.
        if (idx + j > N || parent[order[idx + j]] !== v) {
          return 0;
        }

        queue.push(order[idx + j]);
        visited[order[idx + j]] = 1;
      }

      // 올바른 순서로 다 통과 됐으므로 다음 탐색은 cnt만큼 index값에 더해준다.
      idx += cnt;
    }

    return 1;
  };

  return test();
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
