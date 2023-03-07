/**
 * [문제] https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * [유형] 깊이/너비 우선 탐색(DFS/BFS)
 * [난이도] Level 2
 * [소요 시간] 16분
 */

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0, 0]];
  while (queue.length !== 0) {
    const [x, y, count] = queue.shift();
    if (x + 1 === m && y + 1 === n) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || m <= nx || n <= ny || !maps[ny][nx]) {
        continue;
      }
      if (maps[ny][nx] === 1) {
        maps[ny][nx] = 0;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}
