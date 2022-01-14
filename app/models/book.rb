class Book < ApplicationRecord
    belongs_to :user
    has_many :transactions, dependent: :destroy
    has_many :categories , through: :transactions
end
