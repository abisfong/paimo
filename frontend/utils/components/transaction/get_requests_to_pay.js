export default function getRequestsToPay(transactions, currentUserId) {
  return transactions.filter(transaction => 
    !transaction.complete && transaction.payer_id === currentUserId
  )
}