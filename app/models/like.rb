class Like < ApplicationRecord
  validates :user_id, :transaction_id, presence: true

  belongs_to :user
  
  belongs_to :transaction_,
    foreign_key: :transaction_id,
    class_name: :Transaction
end
