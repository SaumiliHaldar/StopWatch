const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue")
let startCount = 0;
let intervalId;

// Function to start the timer
const startTimer = () => {
    intervalId = setInterval (() => {
        countDownElement.innerText = startCount++;
    }, 1000);
};

// Function to stop the timer
const stopTimer = () => {
    clearInterval (intervalId);
}

// Function to reset the timer
const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval (intervalId);
}


// Event listeners
document.querySelector(".startBtn").addEventListener("click", startTimer);

document.querySelector(".stopBtn")..addEventListener("click", stopTimer);

document.querySelector(".getTimeBtn").addEventListener("click", showStopValue);

document.querySelector(".clearTimeBtn").addEventListener("click", clearTimerValue);

document.querySelector(".resetBtn").addEventListener("click", resetTimer);