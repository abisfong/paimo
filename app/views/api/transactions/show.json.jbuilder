json.partial! '/api/transactions/transaction', transaction: @transaction

p 'IN JSON BUILDER'
p @users
if @users
  json.users do
    @users.each do |user|
      json.set! user.id do
        json.partial! '/api/users/user', user: user
      end
    end
  end
end