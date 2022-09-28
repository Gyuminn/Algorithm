const sol = (S) => {
  const MAX_SIZE = 1001;
  // 방문 배열의 노드는 클립보드의 상태 정보도 가지고 있어야 함.
  const visited = Array.from(Array(MAX_SIZE), () => Array(MAX_SIZE).fill(0));

  function BFS() {
    const queue = [];
    queue.push([1, 0, 0]); // [현재 위치, 클립보드, 시간]
    visited[1][0] = 1; // (현재 위치 : 1, 클립보드 : 0) 방문처리

    while (queue.length) {
      const [x, clipBoard, time] = queue.shift();
      if (x === S) return time;
      if (x > 0 && x < MAX_SIZE) {
        // 연산 1. 클립보드에 현재 화면의 이모티콘 수를 저장
        if (visited[x][x] === 0) {
          visited[x][x] = 1;
          queue.push([x, x, time + 1]);
        }

        // 연산 2. 클립보드에 복사된 것이 있어야 가능.
        if (
          clipBoard &&
          x + clipBoard < MAX_SIZE &&
          visited[x + clipBoard][clipBoard] === 0
        ) {
          visited[x + clipBoard][clipBoard] = 1;
          queue.push([x + clipBoard, clipBoard, time + 1]);
        }

        // 연산 3. 화면의 이모티콘 중 한 개 삭제하기
        if (visited[x - 1][clipBoard] === 0) {
          visited[x - 1][clipBoard] = 1;
          queue.push([x - 1, clipBoard, time + 1]);
        }
      }
    }
  }

  return BFS();
};

const lineHandler = (line) => {
  console.log(sol(+line));
  process.exit();
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
