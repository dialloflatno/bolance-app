class UserSerializer < ActiveModel::Serializer
  attributes :id,:full_name,:username,:email,:password_digest
  has_many :books 
end
