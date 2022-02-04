class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :company, :paymentpermonth, :month, :subscribed
  belongs_to :user
end
