class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, presence: true, uniqueness: true
  validates :first_name, :last_name, :amount, :password_digest, :auth_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :username, length: { minimum: 3 }
  validates :first_name, :last_name, length: { minimum: 1 }

  after_initialize :ensure_auth_token

  has_many :payments,
    foreign_key: :payer_id,
    class_name: :Transaction

  has_many :requests,
    foreign_key: :payee_id,
    class_name: :Transaction

  has_many :likes

  has_many :notifications

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_auth_token
    self.auth_token ||= SecureRandom.urlsafe_base64
  end

  def reset_auth_token!
    self.auth_token = SecureRandom.urlsafe_base64
    self.save
    self.auth_token
  end
end
