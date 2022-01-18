class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :item ,:payment_type, :store_name , :store_address, :cost,:created_at

 

end
