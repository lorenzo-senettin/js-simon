function generateRandomNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(num);
  }
  return numbers;
}

