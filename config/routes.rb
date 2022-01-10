Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do  
    resources :users, only: [:index, :create, :destroy, :update, :show] do
      resources :notifications, only: [:index]
    end
    resources :transactions, only: [:create, :update, :destroy, :index]
    resources :likes, only: [:create, :destroy]
    resources :friends, only: [:create, :update, :destroy]
    post '/auth', to: 'auth#create'
    delete '/auth', to: 'auth#destroy'
  end
  root to: 'static_pages#root'
end