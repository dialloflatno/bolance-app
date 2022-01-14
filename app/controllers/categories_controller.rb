class CategoriesController < ApplicationController

    def index
        render json: categories , status: :ok
    end

    def show
        render json: category , status: :ok
    end

    def create
        render json: new_cateo, status: :created
    end

    def destroy
        render  json: bye_cateo , status: :no_content
    end
end
