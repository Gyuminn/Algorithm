const solution = (k, room_number) => {
  const map = new Map();

  const findRoom = (room) => {
    if (!map.has(room)) {
      map.set(room, room + 1);
      return room;
    }

    // 재귀 함수를 통해 다음 노드를 찾는다.
    let next = findRoom(map.get(room));
    map.set(room, next + 1);
    return next;
  };

  return room_number.map((room) => findRoom(room));
};
