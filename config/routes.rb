Rails.application.routes.draw do
  resources :categories, only:[:index,:show,:create,:destroy]
  resources :transactions,only:[:index,:show,:create, :destroy]
  resources :books,only:[:index,:show,:create, :destroy]
  resources :users,only:[:index,:show,:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  post '/signup', to: 'users#create'

  post "/signin", to: "sessions#create"

  #session routes for login / logout

  delete '/logout', to: 'sessions#destroy'


  get "/me", to: "users#show"






end
