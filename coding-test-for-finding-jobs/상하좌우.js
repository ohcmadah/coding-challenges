const d = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};

const solution = (n, plans) => {
  let [y, x] = [1, 1];
  for (const plan of plans) {
    const [dy, dx] = d[plan];
    const [ny, nx] = [y + dy, x + dx];
    if (ny < 1 || n < ny || nx < 1 || n < nx) {
      continue;
    }
    y = ny;
    x = nx;
  }
  return y + " " + x;
};

const answer = solution(5, ["R", "R", "R", "U", "D", "D"]);
console.log(answer);
