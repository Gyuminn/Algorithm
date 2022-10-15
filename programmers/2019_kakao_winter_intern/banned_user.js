function solution(user_id, banned_id) {
  let answer = 0;
  let visited = Array.from({ length: user_id }, () => 0);
  let set = new Set();

  const check = (bannedUser, user) => {
    for (let i = 0; i < bannedUser.length; i++) {
      if (bannedUser[i] !== "*" && bannedUser[i] !== user[i]) return false;
    }
    return true;
  };

  const makeList = (L, start, str) => {
    if (L === banned_id.length) {
      let arr = str.split(" ");
      arr.shift();
      arr.sort();
      let newStr = arr.join("");
      set.add(newStr);
    }

    if (start >= user_id.length) return;

    for (let i = start; i < banned_id.length; i++) {
      for (let j = 0; j < user_id.length; j++) {
        if (visited[j]) continue;

        if (banned_id[i].length !== user_id[j].length) continue;
        if (!check(banned_id[i], user_id[j])) continue;

        visited[j] = 1;
        makeList(L + 1, i + 1, str + " " + user_id[j]);
        visited[j] = 0;
      }
    }
  };

  makeList(0, 0, "");
  return set.size;
}
