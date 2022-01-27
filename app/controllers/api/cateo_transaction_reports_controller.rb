class Api::CateoTransactionReportsController < ApplicationController

    def index 
        all_expense_reports = CateoTransactionReport.all
        render json: all_expense_reports, status: :ok
    end



    def create
        report_expense = CateoTransactionReport.create( report_param)
        render json: report_expense, status: :created
    end


private

    def report_param
        params.permit(:cateo_transaction_report,:category_id, :expense_id)
    end
end
