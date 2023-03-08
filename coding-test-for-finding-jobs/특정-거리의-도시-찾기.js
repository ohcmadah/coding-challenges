const solution = (N, M, K, X, city) => {
  const graph = new Array(N + 1).fill([]);
  city = city.split("\n");
  for (const c of city) {
    const [a, b] = c.split(" ").map((n) => Number(n));
    graph[a] = [...graph[a], b];
  }
  const visited = new Array(N + 1).fill(false);

  const answer = [];
  const queue = [...graph[X].map((n) => [n, 1])];
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (distance === K && !visited[node]) {
      answer.push(node);
      continue;
    }
    visited[node] = true;
    queue.push(...graph[node].map((n) => [n, distance + 1]));
  }

  return answer.length ? answer : -1;
};

module.exports = solution;
