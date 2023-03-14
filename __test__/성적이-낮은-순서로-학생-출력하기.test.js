const solution = require("../coding-test-for-finding-jobs/성적이-낮은-순서로-학생-출력하기");

test("홍길동 95, 이순신 77일 때, 성적이 낮은 순: 이순신, 홍길동", () => {
  expect(solution(2, "홍길동 95\n이순신 77")).toEqual(["이순신", "홍길동"]);
});
