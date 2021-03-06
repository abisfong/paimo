class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :image
      t.integer :amount, null: false, default: 0
      t.string :password_digest, null: false
      t.string :auth_token, null: false
      t.timestamps
    end

    add_index :users, [:first_name, :last_name]
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
