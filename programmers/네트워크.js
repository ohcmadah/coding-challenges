/**
 * [문제] https://school.programmers.co.kr/learn/courses/30/lessons/43162
 * [유형] 깊이/너비 우선 탐색(DFS/BFS)
 * [난이도] Level 3
 * [소요 시간] 16분
 */

function solution(n, computers) {
  const visited = new Array(n).fill(false);

  const dfs = (i) => {
    if (visited[i]) {
      return;
    }
    visited[i] = true;
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] && !visited[j]) {
        dfs(j);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
