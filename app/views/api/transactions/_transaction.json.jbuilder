json.extract! transaction, 
  :id, 
  :payer_id, 
  :payee_id, 
  :note, 
  :sticker, 
  :privacy, 
  :complete, 
  :created_at

if current_user.id == transaction.payer_id || current_user.id == transaction.payee_id
  json.amount transaction.amount
end