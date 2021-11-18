# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  { first_name: "Roro", last_name: "J", username: "roj", email: "roj@gmail.com" , password: "password"},
  { first_name: "Hash", last_name: "F", username: "hashf", email: "hash@gmail.com", password: "password"}
]);