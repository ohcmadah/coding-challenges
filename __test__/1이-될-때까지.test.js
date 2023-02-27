const solution = require("../coding-test-for-finding-jobs/1이-될-때까지");

describe("N이 1이 될 때까지 1을 빼거나 K로 나눌 때 최소 수행 횟수", () => {
  test("N이 25, K가 5일 때 최소 수행 횟수: 2", () => {
    expect(solution(25, 5)).toBe(2);
  });
  test("N이 17, K가 4일 때 최소 수행 횟수: 3", () => {
    expect(solution(17, 4)).toBe(3);
  });
});
