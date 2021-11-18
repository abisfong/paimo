json.array! @users do |user|
  json.id user.id
  json.name user.first_name + ' ' + user.last_name
  json.username user.username
end