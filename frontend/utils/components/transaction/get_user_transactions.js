export default function getUserTransactions(transactions, userId) {
  transactions.filter(transaction =>
    transaction.complete && (
      transaction.payee_id === userId ||
      transaction.payer_id === userId
    )
  )
}