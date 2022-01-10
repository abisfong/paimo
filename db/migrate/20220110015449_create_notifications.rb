class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.bigint :user_id, null: false
      t.string :message, null: false
      t.category :string, null: false
      t.string :data 
      t.timestamps
    end
  end
end
