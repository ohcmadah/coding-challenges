const solution = require("../coding-test-for-finding-jobs/미로-탈출");

describe("탈출하기 위해 움직여야 하는 최소 칸의 개수", () => {
  test("5 X 6 크기의 미로 탈출: 10", () => {
    expect(
      solution(5, 6, [
        [1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ])
    ).toBe(10);
  });
});
