class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :company ,:paymentpermonth ,:subscribed
  belongs_to :user
end
