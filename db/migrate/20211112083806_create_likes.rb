class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.bigint user_id, null: false
      t.bigint payment_id, null: false
      t.timestamps
    end

    add_index :likes, [:user_id, :payment_id], unique: true
  end
end
