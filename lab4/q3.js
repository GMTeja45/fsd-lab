function delayedMessage(message, delay, callback) {
    setTimeout(() => {
      console.log(message);
      if (callback) {
        callback();
      }
    }, delay);
}
  
  
delayedMessage("Hello, this is your delayed message!", 2000, () => {
    console.log("Message has been printed!");
});
  