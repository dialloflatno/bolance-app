class BookSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :user
  has_many :categories 
end
