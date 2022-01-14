class Category < ApplicationRecord
    has_many :transactions, dependent: :destroy
    has_many :book , through: :transactions

end
