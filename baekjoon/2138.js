const sol = (input) => {
  const [N, origin, goal] = input;

  const compare = (a, b) => {
    for (let i = 0; i < N; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const convert = (idx, temp) => {
    if (idx > 0) temp[idx - 1] = temp[idx - 1] === 1 ? 0 : 1;
    temp[idx] = temp[idx] === 1 ? 0 : 1;
    if (idx < N - 1) temp[idx + 1] = temp[idx + 1] === 1 ? 0 : 1;
  };

  const division = (firstOrNot) => {
    let temp = origin.slice();
    let min = Number.MAX_SAFE_INTEGER;
    let cnt = 0;

    if (firstOrNot === 0) {
      temp[0] = temp[0] === 1 ? 0 : 1;
      temp[1] = temp[1] === 1 ? 0 : 1;
      cnt++;
    }

    for (let i = 1; i < N; i++) {
      if (temp[i - 1] !== goal[i - 1]) {
        convert(i, temp);
        cnt++;
      }
    }

    if (compare(temp, goal)) min = Math.min(min, cnt);
    return min;
  };

  let ans1 = division(0);
  let ans2 = division(1);
  const answer = Math.min(ans1, ans2);

  if (answer === Number.MAX_SAFE_INTEGER) {
    return -1;
  } else {
    return answer;
  }
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(+line);
    } else {
      input.push(line.split("").map((v) => +v));
    }

    if (input.length > 2) {
      console.log(sol(input));
      process.exit();
    }
  });
