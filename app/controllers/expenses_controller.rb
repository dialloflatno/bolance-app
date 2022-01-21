class ExpensesController < ApplicationController
    

    def index        
        render json:  Expense.all , status: :ok
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



private


    def new_action
        Expense.create!(trans_params)
    end
    
    def trans_params
        params.permit(:item, :cost, :store_name, :store_address, :payment_type, :expense)
    end

    def trans_evict
        found_transact = find_trans
        found_transact.destroy
    end


    def find_trans
        Expense.find_by(id: params[:id])
    end


end


