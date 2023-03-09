const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (N, M, map) => {
  map = map.map((row) => row.split(" ").map((n) => Number(n)));
  const temp = new Array(N).fill().map((_) => new Array(M));

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

  const calcIndex = (index) => {
    const i = Math.floor(index / M);
    const j = index % M;
    return [i, j];
  };

  const copy = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        temp[i][j] = map[i][j];
      }
    }
  };

  let answer = 0;
  const dfs = (indexs) => {
    if (indexs.length === 3) {
      copy();
      for (const index of indexs) {
        const [i, j] = calcIndex(index);
        temp[i][j] = 1;
      }
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

    const lastIndex = indexs.length ? indexs[indexs.length - 1] : -1;
    for (let index = lastIndex + 1; index < N * M; index++) {
      const [i, j] = calcIndex(index);
      if (map[i][j] === 0) {
        dfs([...indexs, index]);
      }
    }
  };

  dfs([]);
  return answer;
};

module.exports = solution;
