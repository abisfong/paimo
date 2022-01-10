class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.bigint :user_id, null: false
      t.bigint :transaction_id, null: false
      t.string :body, null: false
      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :transaction_id
  end
end
