class Notification < ApplicationRecord
  validates :user_id, presence: true
  validates :category, inclusion: { in: ['friend_request'] }

  belongs_to :user
end
