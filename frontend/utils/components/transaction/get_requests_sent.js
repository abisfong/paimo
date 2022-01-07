export default function getRequestsSent(transactions, currentUserId) {
  transactions.filter(transaction => 
    !transaction.complete && transaction.payee_id === currentUserId
  )
}