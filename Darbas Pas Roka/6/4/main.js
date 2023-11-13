function executeAfterDelay(callback, delay){
    setTimeout(callback, delay);
}

executeAfterDelay(function() {
    console.log("Callback executed after a delay of 2 seconds.");
  }, 2000);