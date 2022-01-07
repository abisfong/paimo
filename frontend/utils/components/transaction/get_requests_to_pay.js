export default function getRequestsToPay(transactions, currentUserId) {
  transactions.filter(transaction => 
    !transaction.complete && transaction.payer_id === currentUserId
  )
}