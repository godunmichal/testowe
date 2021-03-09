Rails.application.routes.draw do
  resources :certificates
  resources :users
  devise_for :users, defaults: { format: :json }
  devise_for :certificates, defaults: { format: :json }
end
