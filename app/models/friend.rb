class Friend < ApplicationRecord
  validates :user1_id, :user2_id, presence: true

  belongs_to :user1,
    foreign_key: :user1_id,
    class_name: :User

  belongs_to :user2,
    foreign_key: :user2_id,
    class_name: :User
end
