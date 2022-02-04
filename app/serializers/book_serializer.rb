class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :budget
  has_many :categories 

end
