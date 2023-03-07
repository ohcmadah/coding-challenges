/**
 * [문제] https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * [유형] 깊이/너비 우선 탐색(DFS/BFS)
 * [난이도] Level 2
 * [소요 시간] 06분
 */

function solution(numbers, target) {
  let count = 0;
  const dfs = (index, num) => {
    if (index === numbers.length) {
      if (num === target) {
        count++;
      }
      return;
    }
    dfs(index + 1, num + numbers[index]);
    dfs(index + 1, num - numbers[index]);
  };
  dfs(0, 0);
  return count;
}
