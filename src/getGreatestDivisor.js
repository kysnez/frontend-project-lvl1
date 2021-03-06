const getGreatestDivisor = (first, second) => {
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
  // console.log(firstDivisors);
  // console.log(secondDivisors);
  let biggestLength = 0;

  if (firstDivisors.length > secondDivisors.length) {
    biggestLength = firstDivisors.length;
  } else {
    biggestLength = secondDivisors.length;
  }

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
  // console.log(commonDivisors);
  if (commonDivisors[commonDivisors.length - 1] !== undefined) {
    result = commonDivisors[commonDivisors.length - 1];
  } else {
    result = commonDivisors[commonDivisors.length - 2];
  }

  return result;
};

export default getGreatestDivisor;
