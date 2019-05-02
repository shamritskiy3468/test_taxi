Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" } 
  devise_for :admin_users

  get 'pages/about'
  get 'pages/index'
  get 'pages/contact'
  get 'pages/home'

  root to: "pages#index"

  namespace :admin do
    resources :cars
    resources :drivers
    resources :places
    resources :users
    resources :trips
    resources :destinations
    root to: "cars#index"
  end
    
  resources :places
  resources :trips
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
