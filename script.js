let score = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const secretText = document.getElementById("secret");

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    if (score > 70) {
        secretText.textContent = "HEllo";
    }
});
