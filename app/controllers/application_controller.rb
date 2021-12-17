class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :store_user_location!, if: :storable_location?

  # before_action :authenticate_user!

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :full_name])
  end

  protected
  
  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to new_user_session_path, :alert => 'You need to login to create a feedback!'
    end
  end

  def after_sign_in_path_for(user)
    puts "thing that signed in: #{user}"
    stored_location_for(user) || super
  end

  private

  def storable_location?
    request.get? && is_navigational_format? && !devise_controller? && !request.xhr? 
  end

  def store_user_location!
    # :user is the scope we are authenticating
    store_location_for(:user, request.fullpath)
  end
end
