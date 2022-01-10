class Api::FriendsController < ApplicationController
  def create
    @friendship = Friend.new(
      user1_id: current_user.id,
      user2_id: params[:user_id]
    )
    if @friendship.save
      Notification.create(
        user_id: params[:user_id],
        category: 'friend_request',
        data: "{user_id: #{current_user.id}, name: #{current_user.first_name}}"
      )
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  def update
    @friendship = Friend.find(params[:id])
    if @friendship.update(pending: false)
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  def destroy
    @friendship = Friend.find(params[:id])
    if @friendship.destroy
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end
end
