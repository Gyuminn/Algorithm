function sol(input) {
  const [[N], ...stats] = input;
  const halfN = N / 2;

  const visited = Array.from({ length: N }, () => 0);
  let min = Number.MAX_SAFE_INTEGER;

  const DFS = (L, start) => {
    if (L === halfN) {
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);

      for (let i = 0; i < N; i++) {
        if (visited[i] === 1) sTeam.push(i);
        else lTeam.push(i);
      }

      for (let i = 0; i < halfN; i++) {
        for (let j = i + 1; j < halfN; j++) {
          sSum += stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
          lSum += stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
    } else {
      for (let i = start; i < N; i++) {
        // 여기서 visited 체크는 순회 조건이 아니라 위에서 팀을 나누는데 사용됨.
        visited[i] = 1;
        DFS(L + 1, i + 1);
        visited[i] = 0;
      }
    }
  };
  DFS(0, 0);
  return min;
}

const input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
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
