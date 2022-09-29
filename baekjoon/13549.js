// 단순 BFS 문제가 아니다.
// BFS로 풀이하기 위해서는 모든 간선의 가중치가 동일해야 한다는 전제 조건이 필요하기 때문이다.
// 따라서 deque를 이용하여 가중치가 0인 간선에 연결된 정점은 큐의 맨 뒤가 아닌 맨 앞에 넣는 방법으로 풀이해보자.

const sol = (input) => {
  const MAX_SIZE = 100000;
  const [N, K] = input;
  const visited = Array.from({ length: MAX_SIZE + 1 }, () => 0);

  const BFS = (N) => {
    const queue = [];
    queue.push([N, 0]);
    visited[N] = 1;

    while (queue.length) {
      const [x, time] = queue.shift();
      if (x === K) return time;

      for (let nx of [x * 2, x - 1, x + 1]) {
        if (nx >= 0 && nx <= MAX_SIZE && visited[nx] === 0) {
          visited[nx] = 1;
          if (nx === x * 2) {
            // x*2로 이동할 경우 우선순위를 반영하여 queue의 맨 앞에 넣어준다.
            queue.unshift([nx, time]);
          } else {
            queue.push([nx, time + 1]);
          }
        }
      }
    }
  };

  return BFS(N);
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    console.log(sol(line.split(" ").map((v) => +v)));
    process.exit();
  });
