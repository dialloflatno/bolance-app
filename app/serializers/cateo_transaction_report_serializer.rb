class CateoTransactionReportSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :category
  belongs_to :expense
end
