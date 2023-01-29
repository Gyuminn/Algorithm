function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let binary = numbers[i].toString(2);
    if (valid(binary)) answer.push(1);
    else answer.push(0);
    // console.log('binary: ', binary);
  }

  return answer;
}

const valid = (num) => {
  let len = num.length + 1;
  let temp = powerOfTwo(len);

  if (len === temp) {
    return check(num, temp / 2);
  } else {
    // console.log(temp - len)
    num = "0".repeat(temp - len) + num;
    return check(num, temp / 2);
  }

  return true;
};

const powerOfTwo = (num) => {
  let temp = 1;
  while (true) {
    if (temp >= num) return temp;
    temp *= 2;
  }

  // if (num === 1) return true;
  // if (num % 2 !== 0) return false;
  // return powerOfTwo(num / 2);
};

const check = (num, hop) => {
  if (hop === 1) return true;
  if (num[hop - 1] == 0) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] == 1) return false;
    }
    return true;
  }

  return (
    check(num.slice(0, hop - 1), hop / 2) && check(num.slice(hop), hop / 2)
  );
};
