const sol = (num) => {
  const result = [];

  let recursiveFibCnt = 0;
  let dynamicFibCnt = 0;

  const recursiveFib = (num) => {
    if (num === 1 || num === 2) {
      recursiveFibCnt++;
      return 1;
    } else {
      return recursiveFib(num - 1) + recursiveFib(num - 2);
    }
  };

  const dynamicFib = (num) => {
    const dp = Array.from({ length: num + 1 }, () => 0);
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= num; i++) {
      dynamicFibCnt++;
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[num];
  };

  recursiveFib(num);
  dynamicFib(num);

  return recursiveFibCnt + " " + dynamicFibCnt;
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    console.log(sol(+line));
    process.exit();
  });
