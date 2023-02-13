// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    if (k === 0) {
      // 더 이상 제거하지 않아도 되므로 다 넣음
      stack.push(number.slice(i));
      break;
    }

    const num = number[i];
    // 현재 숫자보다 작은 앞 숫자들 제거
    while (stack.length && stack[stack.length - 1] < num && 0 < k) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}
