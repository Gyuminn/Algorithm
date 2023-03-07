function solution(s) {
  // 문자열의 길이
  const strLength = s.length;

  // 자를 단위
  let unit = 1;

  // 문자열의 절반까지만 검사하면 된다.
  const unitMax = strLength / 2;

  // 가장 짧은 길이를 구하는 변수 - 초기화.
  let minLength = strLength;

  for (let i = 1; i <= unitMax; i++) {
    // 앞에서부터 자르는 문자열
    let unitString = s.slice(0, i);

    // 카운트
    let cnt = 1;

    // 누적해서 문자열 저장
    let tempString = "";

    for (let j = i; j < strLength; j += i) {
      // 비교할 문자열
      const comparedString = s.slice(j, j + i);

      // 같다면 카운트를 증가시키고 넘어가고
      // 다를 경우 문자열에 누적해준 후 unitString을 초기화한다.
      if (unitString === comparedString) {
        cnt++;
      } else {
        if (cnt > 1) tempString += cnt.toString();
        tempString += unitString;
        unitString = comparedString;
        cnt = 1;
      }
    }
    // 마지막에 수행된 부분을 마찬가지로 문자열에 누적.
    if (cnt > 1) tempString += cnt.toString();
    tempString += unitString;

    // 최소값을 갱신.
    minLength = Math.min(minLength, tempString.length);
  }
  return minLength;
}
