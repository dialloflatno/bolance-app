class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :users , only:[:index]
    # before_action :transactions , only:[:index]
    # # before_action :categories , only:[:index]
    # before_action :books , only:[:index, :show]
    # before_action :category , only:[:show]
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
end

private 

##-RESCUES--------------------------
    def record_not_found
        render json: { errors:"No Transaction Found" }, status: :not_found
    end
##-ALL--------------------------
    def users
        User.all
    end

    def transactions 
        Transaction.all
    end

    def categories
        Category.all
    end

    def books
        Book.all
    end

   
##-ALL--------------------------

    def trans_evict
        found_transact = find_trans
        found_transact.destroy
    end


    def find_trans
        Transaction.find_by(id: params[:id])
    end

    def new_action
        Transaction.create!(trans_params)
    end
#CATEGORIES-------------------------------------------
    def category 
        Category.find_by(id: params.permit[:id])
    end
    
    def new_cateo
        Category.create!(cateo_params)
    end
    
    def  cateo_params
        params.permit(:name)
    end
    
    def bye_cateo
        cateo_found = category
        cateo_found.destroy
    end
#BOOK-------------------------------------------------

    # def book
    #     Book.find_by!(id: params[:id])
    # end
    

    def trash_book
        find_book = book
        find_book.destroy
    end
#PARAMS-------------------------------------------------

    # def book_params
    #     params.permit(:book ,:title)
    # end

    def trans_params
        params.permit(:item, :store, :cost, :date, :payment, :category)
    end

    # def user_params
    #     params.permit(:full_name, :email, :username, :password)
    # end
