const sol = (input) => {
  const [[N], ...[castles]] = input;

  const stack = [];

  const answer = Array.from({ length: N }, () => 0);

  for (let i = 0; i < N; i++) {
    const castle = castles[i];
    while (stack.length) {
      // 수신탑을 만나게 되면
      if (castle < stack[stack.length - 1][0]) {
        answer[i] = stack[stack.length - 1][1];
        break;
      }
      stack.pop();
    }

    stack.push([castle, i + 1]);
  }

  return answer.join(" ");
};

// 백준에서 입력받는 코드
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
