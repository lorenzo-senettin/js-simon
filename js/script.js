function generateRandomNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(num);
  }
  return numbers;
}

document.addEventListener("DOMContentLoaded", function () {
  // Genera 5 numeri casuali tra 1 e 50
  const randomNumbers = generateRandomNumbers(5, 1, 50);
  console.log("Numeri generati:", randomNumbers);

  // Visualizza i numeri nella lista
  const numbersListEl = document.getElementById("numbers-list");
  randomNumbers.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    numbersListEl.appendChild(li);
  });
});
