class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.string :item
      t.string :payment_type
      t.string :store_name
      t.string :store_address
      t.integer :cost
     t.references :book , :category

      t.timestamps
    end
  end
end
