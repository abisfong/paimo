class Comment < ApplicationRecord
  validates :user_id, :transaction_id, :body, presence: true

  belongs_to :user

  belongs_to :transaction_,
    foreign_key: :transaction_id,
    class_name: :Transaction
end
