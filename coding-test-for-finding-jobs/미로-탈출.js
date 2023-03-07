const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (N, M, maze) => {
  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || M <= nx || N <= ny || !maze[ny][nx]) {
          continue;
        }
        if (maze[ny][nx] === 1) {
          maze[ny][nx] = maze[y][x] + 1;
          queue.push([nx, ny]);
        }
      }
    }
    return maze[N - 1][M - 1];
  };
  return bfs(0, 0);
};

module.exports = solution;
