class Comment < ApplicationRecord
  validates :user_id, :transaction_id, :body, presence: true
end
