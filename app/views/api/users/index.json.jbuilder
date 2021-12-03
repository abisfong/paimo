@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.name user.first_name + ' ' + user.last_name
    json.username user.username
  end
end