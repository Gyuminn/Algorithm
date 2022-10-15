// 크레인 인형뽑기 게임
const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  const checkStack = (doll) => {
    if (stack[stack.length - 1] === doll) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(doll);
    }
  };

  const clawCrane = (idx) => {
    for (let i = 0; i < board.length; i++) {
      if (!board[i][idx]) continue;

      const doll = board[i][idx];
      checkStack(doll);
      board[i][idx] = 0;
      break;
    }
  };

  while (moves.length) {
    const num = moves.shift();
    // 인덱스 번호로 전달
    clawCrane(num - 1);
  }

  return answer;
};
