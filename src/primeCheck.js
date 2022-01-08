const primeCheck = (number) => {
  let result = '';
  const divisors = [];

  if (number === 1) {
    result = 'no';
    return result;
  }

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  result = divisors.length === 2 ? 'yes' : 'no';

  return result;
};

export default primeCheck;
