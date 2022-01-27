class  Api::BookCategoriesController < ApplicationController
    def index
        every_match = BookCategory.all  
        render json: every_match, status: :ok
    end

    def create
        matching = BookCategory.create(bc_param)
        # byebug
        render json: matching, status: :created
    end
    
end

private


    def bc_param
        params.permit(:book_category, :book_id, :category_id)
    end
