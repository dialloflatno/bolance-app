class Subscription < ApplicationRecord
    belongs_to :user
    def change 
        add_column :subscriptions, :subscribed, :boolean
    end
end