const VISIT = 2;
const SEA = 1;
const GROUND = 0;

const direction = [
  [-1, 0], // 북
  [0, 1], // 동
  [1, 0], // 남
  [0, -1], // 서
];

const turnLeft = (d) => {
  return d === 0 ? 3 : d - 1;
};

const back = (d) => {
  return d < 2 ? 2 + d : d - 2;
};

const nextPosition = (a, b, d) => {
  const [dy, dx] = direction[d];
  return [a + dy, b + dx];
};

const solution = (a, b, d, info) => {
  const map = info.split(" ").map((r) => r.split("").map((n) => Number(n)));
  map[a][b] = VISIT;

  let turnCount = 0;

  const move = (nr, nc) => {
    map[nr][nc] = VISIT;
    a = nr;
    b = nc;
    turnCount = 0;
  };

  while (true) {
    d = turnLeft(d);

    if (turnCount === 4) {
      const [by, bx] = nextPosition(a, b, back(d));
      if (map[by][bx] === SEA) {
        break;
      }
      move(by, bx);
    } else {
      const [ny, nx] = nextPosition(a, b, d);
      if (map[ny][nx] === GROUND) {
        move(ny, nx);
      } else {
        turnCount++;
      }
    }
  }
  return map.flat().filter((n) => n === VISIT).length;
};

const answer = solution(1, 1, 0, "1111 1001 1101 1111");
console.log(answer);
