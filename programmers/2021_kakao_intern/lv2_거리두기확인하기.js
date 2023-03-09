// 거리두기 확인하기
function solution(places) {
  // 거리두기를 지켰는지 확인하는 함수
  const isConform = (board) => {
    const positionOfP = [];
    // 앉아있는 자리인 P의 index를 모두 확인. 3번쨰 index는 distance
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === "P") {
          positionOfP.push([i, j, 0]);
        }
      }
    }

    // BFS 방문 노드 초기화
    const visited = Array.from({ length: 5 }, () => Array(5).fill(0));

    // 방향
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    // 밖으로 나가는 것 체크
    const isNotOut = (x, y) => {
      // 유효 범위
      return 0 <= x && x < 5 && 0 <= y && y < 5;
    };

    // 파티션 체크
    const isNotPartition = (x, y) => {
      if (board[x][y] !== "X") return true;
    };

    const bfs = (start) => {
      const queue = [];
      queue.push(start);
      visited[start[0]][start[1]] = 1;

      while (queue.length) {
        // 현재 탐색 위치
        const [x, y, dist] = queue.shift();
        console.log(x, y, dist);
        // P를 만났을 때 거리가 0보다 큰 경우
        if (board[x][y] === "P" && 0 < dist) {
          // 거리가 2보다 작은 경우에는 거리두기를 지키지 않음.
          if (dist <= 2) {
            return false;
          }
          // 방문 노드를 해제해주고 종료시킨 후, 새로운 P 위치부터 다시 시작
          visited[x][y] = 0;
          return true;
        }

        // 다음 노드 방문
        for (let k = 0; k < 4; k++) {
          // 다음 탐색 위치
          const [nx, ny] = [x + dx[k], y + dy[k]];
          // 밖으로 나가지 않고, 파티션이 아니며, 방문한 노드가 아니라면
          if (isNotOut(nx, ny) && isNotPartition(nx, ny) && !visited[nx][ny]) {
            visited[nx][ny] = 1;
            queue.push([nx, ny, dist + 1]);
          }
        }
      }
      // 모든 검색을 마쳤는데 false를 리턴하지 않았다면 거리두기를 지킨 것이다.
      return true;
    };

    let flag = 0;
    positionOfP.forEach((P) => {
      // 각 P에서 시작하는데 하나라도 false라면 false를 리턴
      if (!bfs(P)) {
        flag = 1;
        return false;
      }
    });

    return flag ? 0 : 1;
  };

  const result = [];
  places.forEach((place) => {
    result.push(isConform(place) ? 1 : 0);
  });

  return result;
}
