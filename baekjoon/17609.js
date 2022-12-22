const sol = (input) => {
  const [N, ...strings] = input;

  const answer = [];

  const isSimilarPalindrome = (string, lt, rt) => {
    while (lt < rt) {
      if (string[lt] == string[rt]) {
        lt++;
        rt--;
        continue;
      }
      return false;
    }
    return true;
  };

  const isPalindrome = (string) => {
    let lt = 0;
    let rt = string.length - 1;

    while (lt < rt) {
      if (string[lt] == string[rt]) {
        lt++;
        rt--;
        continue;
      }

      if (
        isSimilarPalindrome(string, lt + 1, rt) ||
        isSimilarPalindrome(string, lt, rt - 1)
      )
        return 1;
      return 2;
    }

    return 0;
  };

  strings.forEach((string) => {
    answer.push(isPalindrome(string));
  });

  return answer.join(`\n`);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length == 0) {
      input.push(+line);
    } else {
      input.push(line);
    }

    if (input.length > input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
