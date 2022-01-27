class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
end

private 

    def record_not_found
        render json: { errors:"No expense Found" }, status: :not_found
    end
