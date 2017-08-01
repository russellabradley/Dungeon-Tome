Rails.application.routes.draw do
  root 'static_pages#index'

  get '/characters', to: 'static_pages#index'

end
