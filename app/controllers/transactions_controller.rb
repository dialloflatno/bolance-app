class TransactionsController < ApplicationController
    

    def index
        render json: transactions , status: :ok
    end

    def show
        render json: find_trans ,status: :ok
    end

    def create
        render json: new_action, status: :created
    end

    def destroy
        render json: trans_evict, status: :no_content
    end

end

