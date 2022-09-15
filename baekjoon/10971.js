const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// 고민했던 지점
// 처음 시작한 도시는 방문 처리가 된다.
// 마지막에 다시 처음 도시로 돌아올 때는 해당 도시가 이미 방문처리가 되어있기 때문에 처리를 별도로 해줘야 한다.
// 시작 도시로 갈 수 있는 방법은 방문 여부와 관계없이 방문한 도시 개수를 카운트하여, 모든 도시를 다 방문했을 때만 시작도시를 다시 갈 수 있다.

// 어떤 도시에서 출발하던 최소값은 같게 나오기 때문에 한 도시만을 선택해도 되지만, 그래도 모든 도시에서 출발하는 경우를 따져보고 싶었다.
// 시간은 sum 조건을 주어서 절약하자.

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    const [[N], ...W] = input;
    const visited = Array.from({ length: N }, () => 0);

    // 순회의 최소 비용
    let min = Number.MAX_SAFE_INTEGER;

    const DFS = (L, start, y, sum) => {
      // 모든 도시를 들렀고(L === N) && 다시 스타트 도시로 온 경우(start === y)
      // 여기서 start === y 라는 조건을 추가해주는 것이 중요!
      if (L === N && start === y) {
        if (min > sum) min = sum;
        return;
      } else {
        for (let x = 0; x < N; x++) {
          if (W[y][x] === 0) continue;
          if (visited[y] === 0 && W[y][x] > 0) {
            visited[y] = 1;
            sum += W[y][x];

            if (sum <= min) {
              DFS(L + 1, start, x, sum);
            }
            visited[y] = 0;
            sum -= W[y][x];
          }
        }
      }
    };

    // 각각의 점(도시)에서 시작하는 경우를 모두 탐색
    for (let y = 0; y < N; y++) {
      DFS(0, y, y, 0);
    }
    console.log(min);
    process.exit();
  }
};
rl.on("line", lineHandler);
