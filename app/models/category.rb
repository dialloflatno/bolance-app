class Category < ApplicationRecord

    has_many :book_categories
    has_many :books, through: :book_categories


    has_many :cateo_transaction_reports
    has_many :expenses, through: :cateo_transaction_reports

end
