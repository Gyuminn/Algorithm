const sol = (input) => {
  const [N, M] = input[0];
  const lectures = input[1];

  // 최소값 초기화를 1로 설정했을 때 틀리는 이슈가 있었다.
  // lower bound의 개념에 대해서 더 공부해보자.
  let min = Math.max(...lectures);
  let max = 1000000000;

  const isPossible = (size) => {
    let group = 1;
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (sum + lectures[i] > size) {
        group++;
        if (group > M) return false;
        sum = lectures[i];
        continue;
      }

      sum += lectures[i];
    }
    return true;
  };

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (isPossible(mid)) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
