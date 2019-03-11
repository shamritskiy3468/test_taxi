Rails.application.routes.draw do
  get 'pages/about'
  get 'pages/index'
  get 'pages/contact'
  get 'pages/home'

  namespace :admin do
      resources :cars
      resources :drivers
      resources :places

      root to: "cars#index"
    end
    
  resources :places
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
