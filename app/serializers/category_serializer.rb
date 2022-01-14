class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name , :transactions
  has_many :transactions
  has_many :books 
 
end
