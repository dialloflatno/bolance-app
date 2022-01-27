class Api::CategoriesController < ApplicationController

    def index
        categories = Category.all
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
private

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