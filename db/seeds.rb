# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = [
  { first_name: "Demo", last_name: "Omed", username: "demo", email: "demo@paimo.com" , password: "password", amount: 1000000},
  { first_name: "Roro", last_name: "Staffordshire", username: "roj", email: "roro@paimo.com" , password: "password", amount: 1000000},
  { first_name: "Hashy", last_name: "Pembroke", username: "hashy", email: "hashy@paimo.com", password: "password", amount: 1000000},
  { first_name: "Mike", last_name: "Badson", username: "magicmike", email: "mike@paimo.com", password: "password", amount: 1000000},
  { first_name: "Paulo", last_name: "Blackmouth", username: "papipaulo", email: "paulo@paimo.com", password: "password", amount: 1000000},
  { first_name: "Jack", last_name: "Eggs", username: "eggyboi", email: "jack@paimo.com", password: "password", amount: 1000000},
  { first_name: "Charis", last_name: "Chairs", username: "charts", email: "charis@paimo.com", password: "password", amount: 1000000},
  { first_name: "Chris", last_name: "From the Water", username: "agua", email: "chris@paimo.com", password: "password", amount: 1000000},
  { first_name: "Sam", last_name: "Sing", username: "samsung", email: "sam@paimo.com", password: "password", amount: 1000000},
  { first_name: "Ayce", last_name: "Hardware", username: "ace", email: "ayce@paimo.com", password: "password", amount: 1000000},
  { first_name: "Serena", last_name: "Fong", username: "bbserena", email: "serena@paimo.com", password: "password", amount: 1000000},
  { first_name: "Jamie", last_name: "Tadamaru", username: "jaythebae", email: "jamie@paimo.com", password: "password", amount: 1000000},
  { first_name: "Nicole", last_name: "An", username: "lilnikky", email: "nicole@paimo.com", password: "password", amount: 1000000},
  { first_name: "Abraham", last_name: "Lincoln", username: "abethebabe", email: "abraham@paimo.com", password: "password", amount: 1000000},
  { first_name: "Kenny", last_name: "Ku", username: "cutekenny", email: "kenny@paimo.com", password: "password", amount: 1000000},
  { first_name: "Emily", last_name: "Johnson", username: "ejay", email: "emily@paimo.com", password: "password", amount: 1000000},
  { first_name: "Veronika", last_name: "Madsen", username: "vmad", email: "veronika@paimo.com", password: "password", amount: 1000000},
  { first_name: "Alan", last_name: "Walker", username: "awalker", email: "alan@paimo.com", password: "password", amount: 1000000}
];

# for i in 0..1000
#   fullname = Faker::Name.unique.name.split(' ')
#   first_name = fullname[0]
#   last_name = fullname[1]
#   username = Faker::Internet.unique.username
#   email = Faker::Internet.unique.email

  
#   users.push(
#     { first_name: first_name, last_name: last_name, username: username, email: email, password: "password", amount: 0 }
#   )
# end

transactions = [
  {payer_id: 1, payee_id: 2, amount: 4250, note: 'Candles to cover up dog smell 🦮', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,1)},
  {payer_id: 1, payee_id: 3, amount: 20000, note: 'Wet food 🐶❤️', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,1)},
  {payer_id: 1, payee_id: 4, amount: 6500, note: 'Drinks 🍻', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,2)},
  {payer_id: 1, payee_id: 5, amount: 2000, note: 'Gas money ⛽️', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,2)},
  {payer_id: 1, payee_id: 6, amount: 1200, note: 'New Year\'s Eggs 🥚', category: 'request', privacy: 'public', complete: false, created_at: Date.new(2022,1,3)},
  {payer_id: 1, payee_id: 7, amount: 3000, note: 'New Year\'s party', category: 'request', privacy: 'public', complete: false, created_at: Date.new(2022,1,3)},
  {payer_id: 1, payee_id: 8, amount: 1000, note: 'Water 💦', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,4)},
  {payer_id: 1, payee_id: 9, amount: 30000, note: 'Samsung phone 📱', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,4)},
  {payer_id: 1, payee_id: 10, amount: 500, note: 'Cards ♠️', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,5)},
  {payer_id: 1, payee_id: 11, amount: 5000, note: 'Uber 🚕', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,8)},
  {payer_id: 1, payee_id: 12, amount: 7200, note: 'Bonnies tax 💰', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2022,1,8)},
  {payer_id: 1, payee_id: 13, amount: 1500, note: 'Bachata cover 💃🏻', category: 'request', privacy: 'public', complete: true, created_at: Date.new(2021,12,27)},
  {payer_id: 1, payee_id: 14, amount: 25000, note: 'Wild Friday night 🥳', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2021,12,28)},
  {payer_id: 1, payee_id: 15, amount: 3000, note: 'Pull-up bar 💪', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2021,12,19)},
  {payer_id: 1, payee_id: 17, amount: 50000, note: 'NY Flight ✈️', category: 'request', privacy: 'public', complete: true, created_at: Date.new(2021,12,12)},
  {payer_id: 1, payee_id: 16, amount: 2000, note: 'Hot dogs 🌭', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2021,11,27)},
  {payer_id: 1, payee_id: 18, amount: 3000, note: 'Birthday gift 🎁', category: 'payment', privacy: 'public', complete: true, created_at: Date.new(2021,11,30)}
  # {payer_id: , payee_id:, amount:, note:, category:, privacy: 'public', complete: true, created_at: Date.new(2018,12,12)}
]


likes = [
  {user_id: 1, transaction_id: 1},
  {user_id: 2, transaction_id: 1},
  {user_id: 1, transaction_id: 2},
  {user_id: 3, transaction_id: 2},
  {user_id: 1, transaction_id: 3},
  {user_id: 4, transaction_id: 3},
  {user_id: 5, transaction_id: 3},
  {user_id: 1, transaction_id: 10},
  {user_id: 11, transaction_id: 10}
]

comments = [
  {user_id: 2, transaction_id: 1, body: 'Thank you :)'},
  {user_id: 3, transaction_id: 2, body: 'Gracias'},
  {user_id: 4, transaction_id: 3, body: 'Good luck in the job search'},
  {user_id: 5, transaction_id: 3, body: 'Hope to see you soon'},
  {user_id: 1, transaction_id: 3, body: 'Thank you both 😌'}
]

users.each do |user|
  User.create(user)
end

transactions.each do |transaction|
  Transaction.create(transaction);
end

likes.each do |like|
  Like.create(like)
end

comments.each do |comment|
  Comment.create(comment)
end











