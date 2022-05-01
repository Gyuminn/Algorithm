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
    quickSort(input, 0, input.length - 1);

    console.log(input.join("\n"));
    rl.close();
  }
};

// 퀵 정렬, quict sort
// 시간 복잡도: 최악 - O(n^^2), 최선 - O(nlogn), 평균 - O(nlogn)
// 공간 복잡도: O(1)
const quickSort = (arr, left, right) => {
  if (left < right) {
    // 기준점을 찾고 기준점을 중심으로 더 작은수, 더 큰수 분류
    let i = position(arr, left, right);
    //기준점 기준 좌측 정렬
    quickSort(arr, left, i - 1);
    //기준점 기준 우측 정렬
    quickSort(arr, i + 1, right);
  }

  return arr;
};

const position = (arr, left, right) => {
  let i = left;
  let j = right;
  let pivot = arr[left];

  // 제자리 더 큰수/더 더 작은수 좌우 배치
  while (i < j) {
    while (arr[j] > pivot) j--;
    while (i < j && arr[i] <= pivot) i++;

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  arr[left] = arr[j];
  arr[j] = pivot;

  return j;
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
