function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-number").innerText = diceNumber;
  }
  