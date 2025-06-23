# code-challenge-3
Simplified Mobile Money Transaction Fee Estimator 📱

This challenge is to create a simplified estimator for transaction fees.

Simplified Fee Structure:

The basic transaction fee is 1.5% of the transaction amount.
However, there's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.
Your Task:

Write a JavaScript function named estimateTransactionFee that:

Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
Takes the amountToSend (as a number) as an argument.
Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
Hint: You'll likely need conditional logic (if-else if-else) or Math.min() and Math.max().
Calculates the total amount that will be debited (amount to send + transaction fee).
Prints the results to the console.
Example Interactions & Outputs:

User is prompted: Unatuma Ngapi? (KES):

Scenario 1: User enters 500

(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!
Scenario 2: User enters 2000

(1.5% of 2000 = 30. Fee is KES 30.)
Console Output:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030

Send Money Securely!
Scenario 3: User enters 10000

(1.5% of 10000 = 150. Fee becomes KES 70 due to maximum.)
Console Output:
Sending KES 10000:
Calculated Transaction Fee: KES 70
Total amount to be debited: KES 10070

Send Money Securely!
