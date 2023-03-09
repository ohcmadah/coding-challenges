const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (N, M, map) => {
  map = map.map((row) => row.split(" ").map((n) => Number(n)));
  const temp = new Array(N).fill().map((_) => new Array(M));

  const copy = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < map[i].length; j++) {
        temp[i][j] = map[i][j];
      }
    }
  };

  const virus = (y, x) => {
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny < 0 || nx < 0 || N <= ny || M <= nx) {
        continue;
      }
      if (temp[ny][nx] === 0) {
        temp[ny][nx] = 2;
        virus(ny, nx);
      }
    }
  };

  let answer = 0;
  const dfs = (count) => {
    if (count === 3) {
      copy();
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (temp[i][j] === 2) {
            virus(i, j);
          }
        }
      }
      const count = temp.flat().filter((n) => n === 0).length;
      answer = Math.max(answer, count);
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1;
          dfs(count + 1);
          map[i][j] = 0;
        }
      }
    }
  };

  dfs(0);
  return answer;
};

module.exports = solution;
