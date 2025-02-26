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

  // Imposta il countdown di 30 secondi
  const countdownEl = document.getElementById("countdown");
  let timeLeft = 30;
  countdownEl.textContent = timeLeft;
  const timerInterval = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      // Nasconde i numeri, il countdown e le istruzioni
      document.getElementById("numbers-list").classList.add("d-none");
      document.getElementById("countdown").classList.add("d-none");
      document.getElementById("instructions").classList.add("d-none");
      // Mostra il form per l'inserimento
      document.getElementById("answers-form").classList.remove("d-none");
    }
  }, 1000);

  // Submit form
  const form = document.getElementById("answers-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene il reload della pagina
    // Recupera i numeri inseriti
    const inputs = document.querySelectorAll("#input-group input");
    const guessedNumbers = Array.from(inputs).map(input => parseInt(input.value));

    // Verifica quali numeri sono stati indovinati
    const correctGuesses = [];
    guessedNumbers.forEach(num => {
      if (randomNumbers.includes(num) && !correctGuesses.includes(num)) {
        correctGuesses.push(num);
      }
    });
  });
});
