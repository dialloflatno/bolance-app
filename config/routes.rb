Rails.application.routes.draw do
  resources :categories, only:[:index,:create,:destroy]
  resources :cateo_transaction_reports,only:[:index,:create, :destroy]
  resources :expenses,only:[:index, :create, :destroy]
  resources :books,only:[:index,:show,:create, :destroy, :update]
  resources :book_categories ,only:[:index,:create]
  resources :users,only:[:index,:update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #create and signin routes
  
  post '/signup', to: 'users#create'

  post "/signin", to: "sessions#create"

  #session routes for login / logout

  get "/me", to: "users#show"

  delete '/logout', to: 'sessions#destroy'

  #heroku path for deployment

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }





end
