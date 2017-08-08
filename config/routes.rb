Rails.application.routes.draw do
  # Knock gem stuff
  post 'user_token' => 'user_token#create'

  root 'static_pages#index'
  get '/campaigns', to: 'static_pages#index'
  get '/campaigns/:id', to: 'static_pages#index'
  get 'new', to: 'static_pages#index'


  namespace :api do
    namespace :v1 do
      resources :characters, only: [:create]
      resources :campaigns do
        resources :sessions, only: [:create, :update]
      end
      resources :users do
        collection do
          get 'search'
        end
      end
    end
  end
end
