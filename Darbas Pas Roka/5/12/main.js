let count = 60;
function startTimer() {
    timer = setInterval(function() {
      count--;
      console.log(count);
      if (count === 0) {
        stopTimer();
        console.log("Time's up!");
      }
    }, 1000);
  }

function stopTimer() {
    clearInterval(timer);
  }
  
  function resetTimer() {
    stopTimer();
    count = 60;
    console.log("Timer reset.");
  }

startTimer();