function sol(input) {
  const [[N], ...stats] = input;

  const visited = Array.from({ length: N }, () => 0);
  let min = Number.MAX_SAFE_INTEGER;

  const DFS = (L, start, cnt) => {
    if (L === cnt) {
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);

      for (let i = 0; i < N; i++) {
        if (visited[i] === 1) sTeam.push(i);
        else lTeam.push(i);
      }

      // sTeam 검사
      if (sTeam.length > 1) {
        for (let i = 0; i < sTeam.length; i++) {
          for (let j = i + 1; j < sTeam.length; j++) {
            sSum += stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
          }
        }
      }

      // lTeam 검사
      if (lTeam.length > 1) {
        for (let i = 0; i < lTeam.length; i++) {
          for (let j = i + 1; j < lTeam.length; j++) {
            lSum += stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
          }
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
    } else {
      for (let i = start; i < N; i++) {
        // 여기서 visited 체크는 순회 조건이 아니라 위에서 팀을 나누는데 사용됨.
        visited[i] = 1;
        DFS(L + 1, i + 1, cnt);
        visited[i] = 0;
      }
    }
  };

  for (let cnt = 1; cnt < N; cnt++) {
    DFS(0, 0, cnt);
  }

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
