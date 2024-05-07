Rails.application.routes.draw do
  resources :countdowns

  get 'greet_testing', to: "stimulus_testing#greet_testing"
  get 'alert_testing', to: "stimulus_testing#alert_testing"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "countdowns#index"
end
