class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: :ok
  end
  
  def create 
    user = User.create(user_params)
    if user
      render json:user , status: :created
    else
      render json:{ error: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update 
    user = User.find_by(id: params[:id])
    newUserInfo =user.update(user_params)
    render json: newUserInfo, status: :ok
  end
  

  def show
    user = User.find_by(id: session[:user_id])
    # byebug
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

private
  
  def user_params
    params.permit(:full_name, :email, :username, :password)
  end
    
end

