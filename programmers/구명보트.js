/*
[문제] https://school.programmers.co.kr/learn/courses/30/lessons/42885
[메모]
❶ 가벼운 사람끼리 최대한 태운다.
→ [40kg, 40kg, 60kg, 60kg] X
❷ 무거운 순서대로 최대한 태운다. (limit에 가깝게) 
→ 가능할 것 같음.
❸ 무거운 사람 + 가벼운 사람
→ 이걸로 함.

사람 몸무게가 40kg 이상이므로 limit이 80kg 미만이면 다 따로 타야 함.
또한 40 <= limit - 몸무게인 곳부터 봐도 될 듯.
*/

function solution(people, limit) {
  if (limit < 80) {
    return people.length;
  }

  people.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < people.length - count - 1; i++) {
    if (people[i] + people[people.length - count - 1] <= limit) {
      count++;
    }
  }

  return people.length - count;
}
