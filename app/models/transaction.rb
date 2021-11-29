class Transaction < ApplicationRecord
  validates :payer_id, :payee_id, :amount, :body, :privacy, presence: true
  validates :complete, inclusion: { in: [true, false] }
  validate :amount, numericality: { greater_than: 0 }
end
