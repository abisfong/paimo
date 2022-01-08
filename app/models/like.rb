class Like < ApplicationRecord
  validates :user_id, :transaction_id, presence: true

  belongs_to :user
  
  belongs_to :transaction
end
