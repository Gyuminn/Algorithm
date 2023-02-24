const solution = (numbers, hand) => {
  // 최근에 눌렀던 손의 위치
  let currentLeft = [3, 0];
  let currentRight = [3, 2];

  // 눌러질 숫자의 위치
  let numPosition = [0, 0];

  // 결과를 저장할 배열
  const result = [];

  // 사용한 손의 위치를 업데이트하는 함수
  const updatePosition = (num, usedHandPosition) => {
    // 숫자가 0일 경우 포지션
    if (num === 0) {
      usedHandPosition[0] = 3;
      usedHandPosition[1] = 1;
      return;
    }

    // 포지션의 행 구하기
    if (num >= 1 && num <= 3) {
      usedHandPosition[0] = 0;
    } else if (num >= 4 && num <= 6) {
      usedHandPosition[0] = 1;
    } else {
      usedHandPosition[0] = 2;
    }

    // 포지션의 열 구하기
    const remainder = num % 3;

    if (remainder === 0) {
      usedHandPosition[1] = 2;
    } else {
      usedHandPosition[1] = remainder - 1;
    }
  };

  // 가장자리 숫자인지 확인하고, 업데이트한다.
  const isSideNum = (num) => {
    if (num === 1 || num === 4 || num === 7) {
      result.push("L");
      updatePosition(num, currentLeft);
      return true;
    }

    if (num === 3 || num === 6 || num === 9) {
      result.push("R");
      updatePosition(num, currentRight);
      return true;
    }
    return false;
  };

  // 중앙에 있는 숫자일 경우 위치 기반으로 가까운 손을 선택하여 업데이트한다.
  const isMiddleNum = (num) => {
    updatePosition(num, numPosition);

    const distBetweenLeftAndNum =
      Math.abs(currentLeft[0] - numPosition[0]) +
      Math.abs(currentLeft[1] - numPosition[1]);
    const distBetweenRightAndNum =
      Math.abs(currentRight[0] - numPosition[0]) +
      Math.abs(currentRight[1] - numPosition[1]);

    if (distBetweenLeftAndNum < distBetweenRightAndNum) {
      result.push("L");
      currentLeft[0] = numPosition[0];
      currentLeft[1] = numPosition[1];
      return;
    }

    if (distBetweenLeftAndNum > distBetweenRightAndNum) {
      result.push("R");
      currentRight[0] = numPosition[0];
      currentRight[1] = numPosition[1];
      return;
    }

    if (distBetweenLeftAndNum === distBetweenRightAndNum) {
      if (hand === "left") {
        result.push("L");
        currentLeft[0] = numPosition[0];
        currentLeft[1] = numPosition[1];
        return;
      } else if (hand === "right") {
        result.push("R");
        currentRight[0] = numPosition[0];
        currentRight[1] = numPosition[1];
        return;
      }
    }
  };

  numbers.forEach((num) => {
    if (!isSideNum(num)) isMiddleNum(num);
  });

  return result.join("");
};
