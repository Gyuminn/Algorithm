function sol(testCase) {
  const [[w, h], ...board] = testCase;

  let answer = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx >= 0 && nx < h && ny >= 0 && ny < w && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input[input.length - 1].toString() === "0,0") {
    input.pop();

    // 여러 개의 테스트 케이스를 분리하여 검사
    while (input.length) {
      const testCase = input.splice(0, input[0][1] + 1);
      console.log(sol(testCase));
    }
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
