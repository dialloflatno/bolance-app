class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name , :expenses
  # has_many :expenses
  has_many :books 
 
end
