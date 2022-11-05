const sol = (input) => {
  const [[N], ...words] = input;

  const priorityOfChar = {};

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!priorityOfChar[char]) priorityOfChar[char] = 0;
      priorityOfChar[char] += 10 ** (word.length - 1 - i);
    }
  });

  let sortable = [];
  for (let char in priorityOfChar) {
    sortable.push([char, priorityOfChar[char]]);
  }

  sortable.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = 0;

  for (let i = 0; i < sortable.length; i++) {
    answer += sortable[i][1] * (9 - i);
  }

  return answer;
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line);

    if (input.length > +input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
