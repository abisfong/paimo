class Notification < ApplicationRecord
  validates :user_id, :message, :category, presence: true

  belongs_to :user
end
