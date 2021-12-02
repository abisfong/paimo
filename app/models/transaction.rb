class Transaction < ApplicationRecord
  validates :payer_id, :payee_id, :amount, :note, :privacy, presence: true
  validates :complete, inclusion: { in: [true, false] }
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :payer,
    foreign_key: :payer_id,
    class_name: :User
  
  belongs_to :payee,
    foreign_key: :payee_id,
    class_name: :User
end
