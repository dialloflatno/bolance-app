class Api::SubscriptionsController < ApplicationController
    def show 
        render json: my_subs ,status: :ok
    end

    def create
        new_sub =  Subscription.create!(sub_params)
        render json: new_sub , status: :created
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
  Subscription.find_by(id: params[:id])
end

def sub_params
  params.permit(:user_id , :company, :month, :paymentpermonth, :subscribed)
end

