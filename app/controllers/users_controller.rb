class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :index, :update]
  
  def create
    @user = User.new(strong_params)

    if @user.save
      login(@user)
      redirect_to users_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    if @current_user != @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def index
    @users = User.all
    render json: @users
  end

  def strong_params
    params.require(:user).permit(:username, :password)
  end
end
