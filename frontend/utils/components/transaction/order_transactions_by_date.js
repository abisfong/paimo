export default function orderTransactionsByDate(transactions) {
  return transactions.sort((firstTransaction, secondTransaction) => {
    return new Date(secondTransaction.created_at) - new Date(firstTransaction.created_at)
  });
}