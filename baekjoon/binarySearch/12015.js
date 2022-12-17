const sol = (input) => {
  const [[N], ...[arr]] = input;
  const result = [arr[0]];

  const binarySearch = (result, compareValue) => {
    let left = 0;
    let right = result.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (result[mid] < compareValue) {
        left = mid + 1;
      } else if (result[mid] > compareValue) {
        right = mid;
      } else {
        // 값이 같을 경우 같은 위치에 들어감.
        return mid;
      }
    }
    return right;
  };

  for (let i = 1; i < N; i++) {
    const compareValue = arr[i];
    if (result[result.length - 1] < compareValue) {
      result.push(compareValue);
      continue;
    }

    const idx = binarySearch(result, compareValue);
    // 이 문제에서는 길이를 구하는 것이 관건이다.
    // 따라서 실제로는 LIS에 맞는 배열이 나오지 않을 수 있다.
    // 수열을 구하고자 한다면 다른 방법을 써야 한다.
    // 14003.js 풀이 방법 참고
    result[idx] = compareValue;
  }

  return result.length;
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
