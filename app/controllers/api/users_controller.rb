class Api::UsersController < ApplicationController
  def create
    if user_creation_params[:password] != user_creation_params[:confirm_password]
      return render json: ['Password and confirmed password do not match'], status: 401
    else
      user_params = user_creation_params
      user_params.delete(:confirm_password)
      @user = User.new(user_params)
    end

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def update
    @user = selected_user
    if @user && @user == current_user && @user.update_attributes(user_update_params)
      render :show
    elsif !@user
      render json: ['An error occurred'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    @users = User.all
  end
  
  def show
    @user = selected_user
    render json: ['An error occurred'], status: 400 if !@user
  end
  
  def destroy
    @user = selected_user
    if @user && @user == current_user
      @user.destroy
      render :show
    else
      render json: ['An error occurred'], status: 400
    end
  end
  
  private
  
  def selected_user
    User.find_by({id: params[:id]})
  end
  
  def user_creation_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :username, 
      :email, 
      :password, 
      :confirm_password
    )
  end

  def user_update_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :username, 
      :email
    )
  end
end
