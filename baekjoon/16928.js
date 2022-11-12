const sol = (input) => {
  const [N, M] = input[0];
  const ladders = input.slice(1, N + 1);
  const snakes = input.slice(N + 1);

  const laddersMap = new Map();
  const snakesMap = new Map();

  let visited = Array.from({ length: 101 }, () => 0);

  for (let ladder of ladders) {
    laddersMap.set(ladder[0], ladder[1]);
  }

  for (let snake of snakes) {
    snakesMap.set(snake[0], snake[1]);
  }

  const bfs = () => {
    const queue = [];
    queue.push([1, 0]);

    while (queue.length) {
      const [x, cnt] = queue.shift();
      if (x === 100) return cnt;

      for (let i = 1; i < 7; i++) {
        let nx = x + i;

        if (laddersMap.has(nx)) {
          nx = laddersMap.get(nx);
        } else if (snakesMap.has(nx)) {
          nx = snakesMap.get(nx);
        }

        if (visited[nx]) continue;
        visited[nx] = 1;
        queue.push([nx, cnt + 1]);
      }
    }
  };

  return bfs();
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0] + input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
