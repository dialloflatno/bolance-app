class Api::SubscriptionsController < ApplicationController
    def show 
        render json: my_subs ,status: :ok
    end

    def index 
        subs_all = Subscription.all
        render json: subs_all , status: :ok
    end

    def update
        sub_status = my_subs.update(subscribed: params[:subscribed])
        render json: sub_status,status: :ok
    end


end

private

def my_subs
  user = User.find_by(id: params[:id])
  user.subscriptions
end
