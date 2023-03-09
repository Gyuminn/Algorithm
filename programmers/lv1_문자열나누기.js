// Level1. 문자열 나누기

function solution(s) {
  let result = 0;

  // 재귀함수로 구현
  const splitString = (s) => {
    // 종료조건
    if (!s) return;

    const firstStr = s[0];

    let firstStrCnt = 0;
    let otherStrCnt = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === firstStr) {
        firstStrCnt++;
      } else {
        otherStrCnt++;
      }

      if (firstStrCnt === otherStrCnt) {
        result++;
        return splitString(s.slice(i + 1));
      }
    }

    // 문자열이 나눠지지 않는 경우 길이는 1이다.
    result++;
  };

  splitString(s);
  return result;
}
