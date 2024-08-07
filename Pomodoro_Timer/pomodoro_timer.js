const timerEl=document.getElementById("timer");
const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");

let interval;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimer(){
   let minutes = Math.floor(timeLeft / 60); // minutes left
   let seconds = timeLeft % 60; // секунд залишилось
let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
timerEl.innerHTML = formattedTime; // виводимо час на екран
}



function startTimer(){
interval = setInterval(()=>{
   if (timeLeft > 0) {
      timeLeft--; // decrease time by 1 second
      updateTimer();
  }else{
       clearInterval(interval); //зупиняємо таймер
       alert("Time's up!");
       timeLeft = 1500; // reset the timer
       updateTimer();
   }
}, 1000)
}


function stopTimer(){
   clearInterval(interval);
}

function resetTimer(){
   clearInterval(interval);
   timeLeft = 1500;
   updateTimer();
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);