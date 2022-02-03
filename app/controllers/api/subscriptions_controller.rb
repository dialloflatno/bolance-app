class Api::SubscriptionsController < ApplicationController
    def show 
        user = User.find_by(id: params[:id])
        my_subs = user.subscriptions
        render json: my_subs ,status: :ok
    end



    def update
        user = User.find_by(id: params[:id])
        sub = user.subscriptions
        sub_status = sub.update(subscribed: params[:subscribed])
        render json: sub_status,status: :ok
    end

end
