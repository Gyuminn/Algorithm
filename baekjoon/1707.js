const answer = [];
const sol = (input) => {
  const [n, m] = input[0];
  const visited = Array.from({ length: n + 1 }, () => 0);

  // graph 관계를 위한 인접 리스트 생성
  const graph = Array.from(Array(n + 1), () => Array());
  input.shift();

  for (let [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const BFS = (start) => {
    const queue = [];
    queue.push(start);

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < graph[cur].length; i++) {
        const next = graph[cur][i];
        if (visited[next] === 0) {
          if (visited[cur] === 1) {
            visited[next] = 2;
          } else {
            visited[next] = 1;
          }
          queue.push(next);
        } else if (visited[next] === visited[cur]) {
          // 더 이상 검색할 필요가 없다.
          return;
        }
      }
    }
  };

  // 분리된 그래프가 있을 수 있으므로
  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      BFS(i);
    }
  }

  // 인접한 정점끼리의 숫자가 같은지 비교
  let flag = false;
  loop1: for (let i = 1; i <= n; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (visited[i] === visited[graph[i][j]]) {
        answer.push("NO");
        flag = true;
        break loop1;
      }
    }
  }

  if (!flag) {
    answer.push("YES");
  }
};

// 여러 개의 테스트 케이스를 입력받는 코드
let cnt = 0;
let input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (!cnt) {
      cnt = +line;
    } else {
      input.push(line.split(" ").map((v) => +v));
      if (input.length == input[0][1] + 1) {
        sol(input);
        input = [];
        cnt--;
      }
    }

    if (cnt === 0) {
      console.log(answer.join(`\n`));
      process.exit();
    }
  });
