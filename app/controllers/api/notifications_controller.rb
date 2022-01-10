class Api::NotificationsController < ApplicationController
  def index
    if current_user.id === params[:user_id]
      @notifications = current_user.notifications
      render :index, status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  def destroy
    @notification = Notification.find(params[:id])
    
    if current_user.id === @notification.user_id
      @notification.destroy
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end
end
