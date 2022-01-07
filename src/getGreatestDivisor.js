export const getGreatestDivisor = (first, second) => {
  let result = 0;
  let firstIndex = 0;
  let secondIndex = 0;

  if (first === second) {
    result = String(first);
    return result;
  }

  const firstDivisors = [];
  const secondDivisors = [];
  const commonDivisors = [];

  for (let i = 1; i <= first; i += 1) {
    if (first % i === 0) {
      firstDivisors.push(i);
    }
  }

  for (let n = 1; n <= second; n += 1) {
    if (second % n === 0) {
      secondDivisors.push(n);
    }
  }

  const biggestLength =
    firstDivisors.length > secondDivisors.length
      ? firstDivisors.length
      : secondDivisors.length;

  for (let i = 0; i <= biggestLength; i += 1) {
    if (firstDivisors[firstIndex] === secondDivisors[secondIndex]) {
      commonDivisors.push(firstDivisors[firstIndex]);
      firstIndex += 1;
      secondIndex += 1;
    } else if (firstDivisors[firstIndex] > secondDivisors[secondIndex]) {
      secondIndex += 1;
    } else {
      firstIndex += 1;
    }
  }
  return commonDivisors[commonDivisors.length - 1];
};
