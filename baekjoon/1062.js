const sol = (input) => {
  const [[N, K], ...strings] = input;

  if (K < 5) return 0;

  const visited = Array.from({ length: 26 }, () => 0);

  let answer = 0;

  // a, c, i, n, t는 무조건 배워야 한다.
  visited[0] = 1;
  visited[2] = 1;
  visited[8] = 1;
  visited[13] = 1;
  visited[19] = 1;

  const canRead = (combination) => {
    let cnt = 0;
    for (let str of strings) {
      let flag = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 97;
        if (!combination[charCode]) {
          flag = 1;
          break;
        }
      }
      if (flag) continue;
      cnt++;
    }
    return cnt;
  };

  const bfs = (L, S) => {
    if (L == K - 5) {
      // 가능한 조합을 구해서 문자열 검사
      answer = Math.max(answer, canRead(visited));
      return;
    } else {
      for (let i = S; i < 26; i++) {
        if (visited[i]) continue;
        visited[i] = 1;
        bfs(L + 1, i + 1);
        visited[i] = 0;
      }
    }
  };

  bfs(0, 0);

  return answer;
};

// 백준에서 입출력받기
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length == 0) {
      input.push(line.split(" ").map((v) => +v));
    } else {
      input.push(line);
    }

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
