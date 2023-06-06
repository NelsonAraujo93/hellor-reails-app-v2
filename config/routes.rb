Rails.application.routes.draw do
  root 'root#index'

  resources :greetings do
    collection do
      get 'random_greeting', to: 'greetings#random_greeting'
    end
  end
end