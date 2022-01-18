class BookCategorySerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :book
  belongs_to :category
end
