class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in? # helper methods can be used in views

  private

  def current_user
    @current_user ||= User.find_by(auth_token: session[:auth_token])
  end

  def require_logged_in
    render json: ['Please sign in'], status: 400 unless logged_in?
  end

  def login(user)
    session[:auth_token] = user.reset_auth_token!
  end

  def logout
    current_user.reset_auth_token!
    session[:auth_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end
end