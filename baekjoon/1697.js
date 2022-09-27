function sol(N, K) {
  const visited = Array.from({ length: 100001 }, () => 0);
  const dis = Array.from({ length: 100001 }, () => 0);
  const queue = [];
  let answer = 0;

  visited[N] = 1;
  queue.push(N);
  dis[N] = 0;
  while (queue.length) {
    if (N === K) return answer;
    const x = queue.shift();
    for (let nx of [x - 1, x + 1, 2 * x]) {
      if (nx === K) return dis[x] + 1;
      if (nx > 0 && nx <= 1000000 && visited[nx] === 0) {
        visited[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
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
