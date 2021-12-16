class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.bigint :payer_id, null: false
      t.bigint :payee_id, null: false
      t.integer :amount, null: false
      t.string :note, null: false
      t.string :sticker
      t.string :privacy, null: false, default: 'private'
      t.boolean :complete, null: false
      t.timestamps
    end

    add_index :transactions, :payer_id
    add_index :transactions, :payee_id
  end
end
