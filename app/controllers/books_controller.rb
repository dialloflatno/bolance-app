class BooksController < ApplicationController

    def index
        render json: books , status: :ok
    end

    def show
        render json: book , status: :ok
    end

    def create
        new_book = Book.create(book_params)
        # byebug
        render json: new_book , status: :ok
    end

    def destroy
        render json: trash_book, status: :no_content
    end
end

private


def book_params
    params.permit(:book ,:title)
end

def book
    book = Book.find_by(id: params[:id])
    # user.books
end