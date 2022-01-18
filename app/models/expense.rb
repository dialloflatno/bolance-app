class Expense < ApplicationRecord

    has_many :cateo_transaction_reports
    has_many :categories, through: :cateo_expense_transaction

end
