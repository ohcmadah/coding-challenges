const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const solution = (N, M, map) => {
  map = map.map((row) => row.split(" ").map((n) => Number(n)));

  const fillVirus = (map) => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 2) {
          const queue = [[i, j]];
          while (queue.length) {
            const [y, x] = queue.shift();
            for (let k = 0; k < 4; k++) {
              const [ny, nx] = [y + dy[k], x + dx[k]];
              if (ny < 0 || nx < 0 || N <= ny || M <= nx) {
                continue;
              }
              if (map[ny][nx] === 0) {
                map[ny][nx] = 2;
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
    }
  };

  let answer = 0;
  const dfs = (indexs) => {
    if (indexs.length === 3) {
      const newMap = JSON.parse(JSON.stringify(map));
      for (const index of indexs) {
        const i = Math.floor(index / M);
        const j = index % M;
        newMap[i][j] = 1;
      }
      fillVirus(newMap);
      const count = newMap.flat().filter((n) => n === 0).length;
      answer = Math.max(answer, count);
      return;
    }

    const lastIndex = indexs.length ? indexs[indexs.length - 1] : -1;
    for (let index = lastIndex + 1; index < N * M; index++) {
      const i = Math.floor(index / M);
      const j = index % M;
      if (map[i][j] !== 0) {
        continue;
      }
      dfs([...indexs, index]);
    }
  };

  dfs([]);
  return answer;
};

module.exports = solution;
