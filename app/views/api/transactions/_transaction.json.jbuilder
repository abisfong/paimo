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
json.comments transaction.comments
json.liked transaction.likes.where(user_id: current_user.id).count != 0
json.commented transaction.comments.one? { |comment| comment.user_id == current_user.id }

if current_user.id == transaction.payer_id || current_user.id == transaction.payee_id
  json.amount transaction.amount
end