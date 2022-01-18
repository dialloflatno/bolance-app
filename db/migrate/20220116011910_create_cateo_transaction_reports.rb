class CreateCateoTransactionReports < ActiveRecord::Migration[6.1]
  def change
    create_table :cateo_transaction_reports do |t|
      t.references :expense , :category

      t.timestamps
    end
  end
end
