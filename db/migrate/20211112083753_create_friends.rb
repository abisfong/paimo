class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.bigint user1_id, null: false
      t.bigint user2_id, null: false
      t.timestamps
    end

    add_index :friends, [:user1_id, :user2_id], unique: true
  end
end
