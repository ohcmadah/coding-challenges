const col = ["a", "b", "c", "d", "e", "f", "g", "h"];
const move = [
  [2, -1],
  [2, 1],
  [-2, -1],
  [-2, 1],
  [1, -2],
  [-1, -2],
  [1, 2],
  [-1, 2],
];

const solution = (position) => {
  const [x, y] = [col.indexOf(position[0]), Number(position[1]) - 1];
  const count = move.reduce((acc, m) => {
    const [dx, dy] = m;
    const [nx, ny] = [x + dx, y + dy];
    if (nx < 8 && ny < 8 && 0 <= nx && 0 <= ny) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

const answer = solution("a1");
console.log(answer);
