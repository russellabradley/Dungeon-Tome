Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'

  root 'static_pages#index'

  get '/campaign', to: 'static_pages#index'

end
