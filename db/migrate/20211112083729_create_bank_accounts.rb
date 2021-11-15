class CreateBankeAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :banke_accounts do |t|

      t.timestamps
    end
  end
end
