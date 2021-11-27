json.extract! @user, :id, :username
json.name @user.first_name + ' ' + @user.last_name
if current_user == @user
  json.amount @user.amount
end