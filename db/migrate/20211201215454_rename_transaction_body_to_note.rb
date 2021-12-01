class RenameTransactionBodyToNote < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :body, :note
  end
end
