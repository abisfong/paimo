json.transactions do
  @transactions.each do |transaction|
    json.set! transaction.id do
      json.partial! '/api/transactions/transaction', transaction: transaction
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end