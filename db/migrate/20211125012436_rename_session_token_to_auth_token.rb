class RenameSessionTokenToAuthToken < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :session_token, :auth_token
  end
end
