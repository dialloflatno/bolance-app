class UserSerializer < ActiveModel::Serializer
  attributes :id,:full_name,:username,:email
  has_many :books
  has_many :categories
end
