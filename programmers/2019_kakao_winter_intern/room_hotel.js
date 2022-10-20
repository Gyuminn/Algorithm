const solution = (k, room_number) => {
  const map = new Map();
  const result = [];

  let visited = [];

  for (let room of room_number) {
    //방이 비어 있는 경우
    if (!map.has(room)) {
      result.push(room);
      map.set(room, room + 1);
      continue;
    }

    // 방이 차있는 경우 빈 방이 나올때 까지 부모 노드 찾기
    visited = [];
    visited.push(room);

    let parent = map.get(room);

    while (map.has(parent)) {
      visited.push(parent);
      parent = map.get(parent);
    }

    result.push(parent);
    map.set(parent, parent + 1);

    for (let visitRoom of visited) {
      map.set(visitRoom, parent + 1);
    }
  }

  return result;
};
