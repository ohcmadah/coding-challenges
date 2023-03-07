const solution = (N, M, ice) => {
  ice = ice.split(" ").map((row) => row.split("").map((n) => Number(n)));

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || M <= x || N <= y) {
      return false;
    }
    if (ice[y][x] === 0) {
      ice[y][x] = 1;
      dfs(x, y - 1);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x + 1, y);
      return true;
    }
    return false;
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(j, i)) {
        count++;
      }
    }
  }

  return count;
};

module.exports = solution;
