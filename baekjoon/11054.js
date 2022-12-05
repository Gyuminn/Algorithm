const sol = (input) => {
  const [[N], ...[seqeunce]] = input;

  const LIS_DP = Array.from({ length: N });
  const LDS_DP = Array.from({ length: N });

  for (let i = 0; i < N; i++) {
    let LIS_MAX = 0;
    for (let j = i; j >= 0; j--) {
      if (seqeunce[j] < seqeunce[i] && LIS_MAX < LIS_DP[j]) {
        LIS_MAX = LIS_DP[j];
      }
    }
    LIS_DP[i] = LIS_MAX + 1;
  }

  for (let i = N - 1; i >= 0; i--) {
    let LDS_MAX = 0;
    for (let j = i; j < N; j++) {
      if (seqeunce[j] < seqeunce[i] && LDS_MAX < LDS_DP[j]) {
        LDS_MAX = LDS_DP[j];
      }
    }
    LDS_DP[i] = LDS_MAX + 1;
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer = Math.max(answer, LIS_DP[i] + LDS_DP[i]);
  }
  return answer - 1;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 2) {
      console.log(sol(input));
      process.exit();
    }
  });
