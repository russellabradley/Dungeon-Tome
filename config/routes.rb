Rails.application.routes.draw do
  # Knock gem stuff
  post 'user_token' => 'user_token#create'

  root 'static_pages#index'
  get '/campaigns', to: 'static_pages#index'
  get '/campaigns/:id', to: 'static_pages#index'


  namespace :api do
    namespace :v1 do
      resources :campaigns
    end
  end

end
