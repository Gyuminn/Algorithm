const path = process.platform == "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...times] = input;
n = +n;
times = times.map((i) => i.split(" ").map((v) => +v));

function solution(n, times) {
  let answer = 0;
  let classroom = 0;
  const obj = [];

  for (let i = 0; i < n; i++) {
    obj.push({ time: times[i][0], start: 1 });
    obj.push({ time: times[i][1], start: -1 });
  }

  obj.sort((a, b) => (a.time == b.time ? a.start - b.start : a.time - b.time));

  obj.forEach((schedule) => {
    if (schedule.start === -1) {
      classroom -= 1;
    } else if (schedule.start === 1) {
      classroom += 1;
    }

    answer = classroom > answer ? classroom : answer;
  });

  return answer;
}

const answer = solution(n, times);
console.log(answer);
