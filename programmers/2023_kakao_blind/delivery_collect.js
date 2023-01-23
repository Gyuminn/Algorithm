function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliBox = 0;
  let pickBox = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (deliveries[i] != 0 || pickups[i] != 0) {
      let count = 0;
      while (deliBox < deliveries[i] || pickBox < pickups[i]) {
        ++count;
        deliBox += cap;
        pickBox += cap;
      }
      deliBox -= deliveries[i];
      pickBox -= pickups[i];
      answer += (i + 1) * count * 2;
    }
  }
  return answer;
}
