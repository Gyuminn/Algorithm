const sol = (input) => {
  const N = input[0];
  input.shift();
  input.pop();
  const queue = [];

  input.forEach((router) => {
    if (router === 0) {
      queue.shift();
    } else if (router !== 0 && queue.length < N) {
      queue.push(router);
    }
  });

  return queue.length ? queue.join(" ") : "empty";
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(+line);

    if (input[input.length - 1] === -1) {
      console.log(sol(input));
      process.exit();
    }
  });
