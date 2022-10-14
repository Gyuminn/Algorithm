const solution = (s) => {
  const tuples = s
    .slice(2, -2)
    .split("},{")
    .map((v) => v.split(",").map((num) => +num));
  tuples.sort((a, b) => a.length - b.length);

  const answer = tuples.reduce((acc, cur) => {
    const value = cur.filter((e) => !acc.includes(e))[0];
    acc.push(value);
    return acc;
  });

  return answer;
};
