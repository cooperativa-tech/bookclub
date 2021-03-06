Rails.application.routes.draw do
  root to: "gatherings#index"

  get "/login", to: "sessions#new", as: :login
  post "login" => "sessions#create"
  delete "/logout", to: "sessions#destroy", as: :logout

  namespace :books do
    get "/manual_import/new", to: "manual_import#new"
    post "/manual_import", to: "manual_import#create"
  end

  resources :books

  resources :gatherings do
    resources :books, only: %i[index], module: :gatherings
    resources :notifications, only: %i[create], module: :gatherings
  end

  resources :users, only: %i[] do
    resources :books, only: %i[index], module: :users
  end

  namespace :admin do
    resources :users

    root to: "users#index"
  end
end
