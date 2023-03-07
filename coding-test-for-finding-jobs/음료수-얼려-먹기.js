const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (N, M, ice) => {
  ice = ice.split(" ").map((row) => row.split("").map((n) => Number(n)));

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    ice[startY][startX] = 1;
    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || M <= nx || N <= ny || ice[ny][nx]) {
          continue;
        }
        ice[ny][nx] = 1;
        queue.push([nx, ny]);
      }
    }
  };

  let count = 0;
  while (true) {
    let i = 0;
    let j = 0;
    for (; i < N; i++) {
      j = ice[i].indexOf(0);
      if (j !== -1) {
        break;
      }
    }
    console.log(i, j);
    if (j === -1) {
      break;
    }
    bfs(j, i);
    count += 1;
  }

  return count;
};

module.exports = solution;
