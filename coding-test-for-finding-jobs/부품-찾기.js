const solution = (N, components, M, order) => {
  components = components.split(" ").sort((a, b) => Number(a) - Number(b));

  const search = (arr, target, start, end) => {
    if (start > end) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);
    const cur = Number(arr[mid]);
    target = Number(target);
    if (cur === target) {
      return mid;
    }

    if (cur < target) {
      return search(arr, target, mid + 1, end);
    } else {
      return search(arr, target, start, mid - 1);
    }
  };

  const result = order.split(" ").map((o) => {
    const index = search(components, o, 0, components.length) !== -1;
    if (index) {
      return "yes";
    }
    return "no";
  });
  return result;
};

module.exports = solution;
