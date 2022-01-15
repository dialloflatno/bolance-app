class Category < ApplicationRecordB
    belongs_to:book
    has_many :transactions, dependent: :destroy
    # has_many :book , through: :transactions

end
