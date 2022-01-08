json.extract! transaction, 
  :id, 
  :payer_id, 
  :payee_id, 
  :note, 
  :sticker, 
  :privacy, 
  :complete,
  :category,
  :created_at
json.like_count transaction.likes.count

if current_user.id == transaction.payer_id || current_user.id == transaction.payee_id
  json.liked transaction.likes.where(user_id: current_user.id).count != 0
  json.amount transaction.amount
end