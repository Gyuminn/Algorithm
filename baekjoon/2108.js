const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > input[0]) {
    input.shift();
    getArithmeticMean(input);
    getMedian(input);
    getMode(input);
    getScope(input);
    rl.close();
  }
};

const getArithmeticMean = (arr) => {
  const sum = arr.reduce((prev, curr) => prev + curr);
  console.log(
    Math.round(sum / arr.length) === -0 ? 0 : Math.round(sum / arr.length)
  );
};

const getMedian = (arr) => {
  const sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr[Math.floor(sortArr.length / 2)]);
};

// 최빈값, mode 구하기
const getMode = (arr) => {
  // 배열의 길이가 1이라면 값을 출력하고 return
  if (arr.length === 1) {
    console.log(arr[0]);
    return;
  }

  // 출연 빈도 구하기
  // 1. 초기값으로 빈 객체 {}를 넣어준다.
  // 2. 파라미터로 들어온 배열을 순회하면서
  // 2-1. 빈 객체의 key 값으로 '배열의 요소'를 넣어주고
  // 2-2. key에 해당하는 value 에는 '배열의 요소의 갯수'를 넣어준다.
  const counts = arr.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  // 요소와 개수를 표현하는 배열 생성
  // [[요소,개수], [요소,개수], ...]
  const result = [];
  for (let key in counts) {
    result.push([Number(key), counts[key]]);
  }

  // 출현 빈도별 정리하기(많은 수부터)
  result.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  // 빈도수가 같은 것들이 있다면 두 번째로 작은 수 출력
  console.log(result[0][1] === result[1][1] ? result[1][0] : result[0][0]);
};

const getScope = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  console.log(max - min);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
