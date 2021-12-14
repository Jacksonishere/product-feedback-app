Rails.application.routes.draw do
  root 'pages#index'
  resources :feedbacks

  # instead of default users/sign_up it will be auth/sign_up. 
  #map the routes from the default registration controller to our own registration controller.
  devise_for :users, path: 'auth', controllers: { sessions: 'users/sessions', registrations: 'users/registrations', }
  # map the base /auth path to the new registration action. This is incase the user submits wrong form then goes back to /auth and accidentally refreshes. Then they just hav this form again
  devise_scope :user do
    get 'auth', to: 'users/sessions#new'
    # get 'auth/sign_in', to: 'users/sessions#new'
    # get 'auth/sign_in', to: 'users/registrations#create'

    # get 'auth/sign_up', to: 'users/registrations#new'
    # post 'auth', to: 'users/registrations#create'
  end


end
