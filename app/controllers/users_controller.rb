class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :index]
  
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
    
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def strong_params
    params.require(:user).permit(:username, :password)
  end
end
