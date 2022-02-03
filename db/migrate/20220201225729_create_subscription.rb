class CreateSubscription < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.references :user
      t.string  :company
      t.string :month
      t.integer :paymentpermonth
      t.boolean :subscribed
      t.timestamps
    end
  end
end
