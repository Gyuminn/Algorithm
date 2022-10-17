// 합병 정렬(merge sort)
// 시간 복잡도: ologn

const sol = (input) => {
  const [N, k] = input[0];
  const arr = input[1];

  let count = 0;
  let target;

  // 정렬, 정복, 병합 과정
  const merge = (left, right) => {
    const sortedArr = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
      count++;
      if (count === k) target = sortedArr[sortedArr.length - 1];
    }

    // left, right 둘 중 하나는 요소가 남아있기 때문에 밑에 두 개의 while 문 중 하나만을 실행하게 된다.
    // 이 때 count를 마저 세주면 됨.
    while (left.length) {
      sortedArr.push(left.shift());
      count++;
      if (count === k) target = sortedArr[sortedArr.length - 1];
    }

    while (right.length) {
      sortedArr.push(right.shift());
      count++;
      if (count === k) target = sortedArr[sortedArr.length - 1];
    }

    return sortedArr;
  };

  // 분할 과정
  const mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    const boundary = Math.ceil(arr.length / 2);
    const left = arr.slice(0, boundary);
    const right = arr.slice(boundary);

    return merge(mergeSort(left), mergeSort(right));
  };

  mergeSort(arr);
  return target ? target : -1;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > 1) {
      console.log(sol(input));
      process.exit();
    }
  });
