json.extract! user, :id, :username
json.name user.first_name + ' ' + user.last_name
if current_user == user
  json.email user.email
  json.amount user.amount
end