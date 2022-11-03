// 2진수 몇개로 표현이 가능한가
// 23 -> 16 + 4 + 2 + 1 = 4
// 32 -> 1
// 64 -> 1
// 48 -> 32 + 16 = 2
const sol = (num) => {
  let cnt = 0;
  while (num > 0) {
    // 23는 비트로 쳤을때 1111임

    if (num & 1) {
      cnt++;
    }
    num >>= 1;
  }
  return cnt;
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
