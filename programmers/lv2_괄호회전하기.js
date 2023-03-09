// 괄호 회전하기
function solution(s) {
  const isRightBracket = (arr) => {
    // 원본 배열을 받아 복사
    const copyArr = arr.slice();
    const stack = [];

    while (copyArr.length) {
      if (!stack.length) {
        // 스택이 비어있다면 push
        stack.push(copyArr.shift());
      } else {
        // arr의 첫 번쨰 원소
        const bracket = copyArr[0];
        // stack의 마지막 원소
        const lastOfStack = stack[stack.length - 1];

        if (
          // 쌍을 이루는 경우
          (bracket === ")" && lastOfStack === "(") ||
          (bracket === "]" && lastOfStack === "[") ||
          (bracket === "}" && lastOfStack === "{")
        ) {
          stack.pop();
          copyArr.shift();
        } else {
          // 쌍을 이루지 않는 경우
          stack.push(copyArr.shift());
        }
      }
    }
    if (stack.length === 0) return true;
  };

  // 문자열을 회전하면서 올바른 문자열일 경우 cnt 증가
  let cnt = 0;
  let rotate = 0;
  // 문자열을 배열로 변환
  const bracketArr = s.split("");

  while (rotate < bracketArr.length) {
    if (isRightBracket(bracketArr)) cnt++;
    bracketArr.push(bracketArr.shift());
    rotate++;
  }

  return cnt;
}
