class Notification < ApplicationRecord
  validates :user_id, :category, presence: true

  belongs_to :user
end
