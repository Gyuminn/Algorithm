const sol = (input) => {
  const [[N], ...[arr]] = input;
  const result = [arr[0]];

  const binarySearch = (result, arr, i) => {
    let left = 0;
    let right = result.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (result[mid] < arr[i]) {
        left = mid + 1;
      } else if (result[mid] > arr[i]) {
        right = mid;
      } else {
        return mid;
      }
    }
    return right;
  };

  for (let i = 1; i < N; i++) {
    if (result[result.length - 1] < arr[i]) {
      result.push(arr[i]);
      continue;
    }

    const idx = binarySearch(result, arr, i);
    result[idx] = arr[i];
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
