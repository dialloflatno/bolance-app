class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books, status: :ok
    end

    def show
        book = Book.find_by(id: params[:id])
        render json: book, status: :ok
    end

    def create
        new_book = Book.create(book_params)
        # byebug
        render json: new_book , status: :ok
    end
    def update
        book = Book.find_by(id: params[:id])
        new_title = book.update(book_params)
        render json: new_title,status: :ok
    end


    def destroy
        book = Book.find_by(id: params[:id])
        toss_book = book.destroy
        # byebug
        render json: toss_book, status: :no_content
    end
    
private
    
    
    def book_params
        params.permit( :user_id, :book ,:title)
    end
    end
    

