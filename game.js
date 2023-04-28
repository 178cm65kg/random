const answer = Math.floor(Math.random() * 100) + 1;
const guesses = [];
let remainingGuesses = 10;
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultParagraph = document.getElementById('result');
const guessesParagraph = document.getElementById('guesses');

function checkGuess() {
  const guess = Number(guessInput.value);
  if (isNaN(guess)) {
    resultParagraph.textContent = '숫자를 입력하세요.';
    return;
  }
  if (guess < 1 || guess > 100) {
    resultParagraph.textContent = '1에서 100 사이의 숫자를 입력하세요.';
    return;
  }
  if (guesses.includes(guess)) {
    resultParagraph.textContent = '이미 입력한 숫자입니다.';
    return;
  }
  guesses.push(guess);
  remainingGuesses--;
  guessesParagraph.textContent = `입력한 숫자: ${guesses.join(', ')}`;
  if (guess === answer) {
    resultParagraph.textContent = '정답입니다!';
    guessInput.disabled = true;
    submitButton.disabled = true;
  } else if (guess < answer) {
    resultParagraph.textContent = '낮음';
  } else {
    resultParagraph.textContent = '높음';
  }
  if (remainingGuesses === 0) {
    resultParagraph.textContent = `10번의 기회를 모두 사용하셨습니다. 정답은 ${answer}입니다.`;
    guess
