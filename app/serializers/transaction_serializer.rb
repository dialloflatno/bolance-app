class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :item ,:payment_type, :store_name , :store_address, :cost,:created_at
  belongs_to :category
  belongs_to :book

 

end
