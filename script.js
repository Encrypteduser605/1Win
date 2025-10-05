let multiplier = 1.0;
let interval = null;

const multiplierDisplay = document.getElementById('multiplier');
const startBtn = document.getElementById('startBtn');

function startSimulation() {
  if (interval) clearInterval(interval);
  multiplier = 1.0;
  multiplierDisplay.textContent = multiplier.toFixed(2) + "x";
  startBtn.disabled = true;
  startBtn.textContent = "Running...";

  interval = setInterval(() => {
    multiplier += 0.05 + Math.random() * 0.1;
    multiplierDisplay.textContent = multiplier.toFixed(2) + "x";

    if (Math.random() < 0.02) {  // ~2% chance to end each tick
      clearInterval(interval);
      multiplierDisplay.textContent += " 💥";
      startBtn.disabled = false;
      startBtn.textContent = "Start Simulation";
    }
  }, 100);
}

startBtn.addEventListener('click', startSimulation);

