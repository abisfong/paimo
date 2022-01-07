export default function getRequestsSent(transactions, currentUserId) {
  return transactions.filter(transaction => 
    !transaction.complete && transaction.payee_id === currentUserId
  )
}