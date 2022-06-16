Rails.application.routes.draw do

  get 'session/index'

  devise_for :users,
    controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
    get '/member-data', to: 'members#show'
  namespace :api do 
    namespace :v1 do
      resources :apartments
    end
  end
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'home#index'
end
