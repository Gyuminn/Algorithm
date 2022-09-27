function sol(N, K) {
  const visited = Array.from({ length: 100001 }, () => 0);
  const path = Array.from({ length: 100001 }, () => 0);
  const queue = [];

  function BFS(N) {
    visited[N] = 1;
    queue.push([N, 0]);
    while (queue.length) {
      const [x, time] = queue.shift();
      if (x === K) return time;
      for (let nx of [x - 1, x + 1, 2 * x]) {
        if (nx >= 0 && nx <= 1000000 && visited[nx] === 0) {
          visited[nx] = 1;
          // nx는 x로부터 왔다.
          path[nx] = x;
          queue.push([nx, time + 1]);
        }
      }
    }
  }

  // return값을 받아와서 경로 추적
  const time = BFS(N);
  const order = [];
  order.push(K);
  let prev = path[K];
  for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = path[prev];
  }

  return `${time}\n${order.reverse().join(" ")}`;
}

const lineHandler = (line) => {
  const [N, K] = line.split(" ").map((v) => +v);

  console.log(sol(N, K));
  process.exit();
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
