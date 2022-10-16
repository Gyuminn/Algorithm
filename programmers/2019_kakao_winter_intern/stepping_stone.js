function solution(stones, k) {
  let lt = 1;
  let rt = Math.max(...stones);

  const test = (stones, k, mid) => {
    let cnt = 0;

    for (let stone of stones) {
      if (stone < mid) {
        cnt++;
      } else {
        cnt = 0;
      }

      if (cnt >= k) return false;
    }
    return true;
  };

  while (lt < rt - 1) {
    if (k === 1) {
      return Math.min(...stones);
    }

    let mid = parseInt((lt + rt) / 2);

    if (test(stones, k, mid)) {
      lt = mid;
    } else {
      rt = mid;
    }
  }

  return lt;
}
