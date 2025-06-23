//Simplified Mobile Money Transaction Fee Estimator

const readline = require('readline');

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function estimateTransactionFee(amountToSend) {
  const amount = Number(amountToSend);

  if (isNaN(amount) || amount <= 0) {
    console.log("Tafadhali ingiza kiasi halali cha kutuma (positive number).");
    rl.close();
    return;
  }

  const feePercentage = 0.015;
  const minFee = 10;
  const maxFee = 70;

  // Calculate base fee
  let fee = amount * feePercentage;

  // Enforce minimum and maximum limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amount + fee;

  // Output the results
  console.log(`\nSending KES ${amount}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");

  rl.close();
}

// Prompt user
rl.question("Unatuma Ngapi? (KES): ", (input) => {
  estimateTransactionFee(input);
});