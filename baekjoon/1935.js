const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0]) + 1) {
    const N = Number(input[0]);
    const postFix = input[1];
    const nums = [...input.slice(2).map((v) => +v)];
    getPostfixAns(N, postFix, nums);
    rl.close();
  }
};

// 후위 표현식을 중위 표현식으로 계산하기
const getPostfixAns = (N, postFix, nums) => {
  let stack = [];
  let sh = new Map();

  for (let i = 0; i < postFix.length; i++) {
    const str = postFix[i];

    if (str === "*" || str === "/" || str === "+" || str === "-") {
      const rightOperand = stack.pop();
      const leftOperand = stack.pop();
      let bundle = 0;

      switch (str) {
        case "+":
          bundle = leftOperand + rightOperand;
          break;
        case "/":
          bundle = leftOperand / rightOperand;
          break;
        case "*":
          bundle = leftOperand * rightOperand;
          break;
        case "-":
          bundle = leftOperand - rightOperand;
          break;
      }
      stack.push(bundle);
    } else {
      if (!sh.has(str)) {
        sh.set(str, nums[0]);
        nums.shift();
      }
      stack.push(sh.get(str));
    }
  }
  console.log(stack[0].toFixed(2));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
