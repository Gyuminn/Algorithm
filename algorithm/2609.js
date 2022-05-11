const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const nums = line
    .split(" ")
    .map((element) => Number(element))
    .sort((a, b) => b - a);

  //Greatest Common Factor(최대 공약수)
  console.log(getGCF(nums[0], nums[1]));

  //Least Common Multiple(최소 공배수)
  console.log(getLCM(nums[0], nums[1], getGCF(nums[0], nums[1])));
  rl.close();
};

//유클리드 호제법
const getGCF = (bigNum, smallNum) => {
  while (bigNum % smallNum !== 0) {
    if (smallNum === 0) {
      return bigNum;
    }

    let n = bigNum % smallNum;
    if (n !== 0) {
      bigNum = smallNum;
      smallNum = n;
    }
  }
  return smallNum;
};

//최소 공배수는 두 수의 곱을 최대 공약수로 나누면 구할 수 있다.
const getLCM = (bigNum, smallNum, gcf) => {
  return (bigNum * smallNum) / gcf;
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
