// Variables to track time
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Elements from the DOM
const timerDisplay = document.getElementById("timer");
const lapsList = document.getElementById("laps");

// Format time into HH:MM:SS
function formatTime(time) {
  const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;
  timerDisplay.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
}

// Pause the stopwatch
function pauseTimer() {
  clearInterval(timerInterval);
}

// Reset the stopwatch
function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";
  lapsList.innerHTML = "";
}

// Record a lap
function recordLap() {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
