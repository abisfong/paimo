class Api::FriendsController < ApplicationController
  def create
    @friendship = Friend.new(
      user1_id: params[:user1_id],
      user2_id: params[:user2_id]
    ) 
    if @friendship.save
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
