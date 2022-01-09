export default function getTransactionBetween(transactions, userId1, userId2) {
  return transactions.filter(transaction => (
    transaction.complete && (
      (transaction.payer_id === userId1 && transaction.payee_id === userId2) ||
      (transaction.payee_id === userId1 && transaction.payer_id === userId2)
    )
  ))
}