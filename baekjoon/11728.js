const input = [];

const sol = (input) => {
  const [N, M] = input[0];
  const A = input[1];
  const B = input[2];

  let i = 0;
  let j = 0;

  const answer = [];
  while (i < N && j < M) {
    if (A[i] <= B[j]) {
      answer.push(A[i]);
      i++;
    } else {
      answer.push(B[j]);
      j++;
    }
  }

  while (i < N) {
    answer.push(A[i]);
    i++;
  }

  while (j < M) {
    answer.push(B[j]);
    j++;
  }
  return answer.join(" ");
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 3) {
      console.log(sol(input));
      process.exit();
    }
  });
