// Price of coins in usdt

enum Coins {
  eth = 1317,
  btc = 19424,
  sol = 2,
}

// Convert usd to Coins

let coins: string = "eth";
let amount: number = 5000;
const converter = () => {
  if (coins == "eth") {
    return amount * Coins.eth;
  } else if (coins == "btc") {
    return amount * Coins.btc;
  } else if (coins == "sol") {
    return amount * Coins.sol;
  } else {
    return amount;
  }
};
